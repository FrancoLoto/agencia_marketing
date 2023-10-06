import requests
from django.conf import settings
from django.core.mail import send_mail
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Contact

activecampaign_url = settings.ACTIVE_CAMPAIGN_URL
activecampaign_key = settings.ACTIVE_CAMPAIGN_KEY


class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data

        name = data["name"]
        email = data["email"]
        subject = data["subject"]
        message = data["message"]
        phone = data["phone"]

        try:
            send_mail(
                subject,
                "Nuevo mensaje de cliente: "
                + "\n\nNombre: "
                + name
                + "\nEmail: "
                + email
                + "\n\nMensaje:\n"
                + message
                + "\nTeléfono: "
                + phone,
                "franco.loto1995@gmail.com",
                ["franco.loto1995@gmail.com"],
                fail_silently=False,
            )

            Contact.objects.create(
                name=name,
                email=email,
                phone=phone,
                subject=subject,
                message=message,
            )

            return Response({"success": "Mensaje enviado correctamente."})
        except ModuleNotFoundError:
            return Response({"error": "Mensaje no enviado."})


class OptInView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data

        email = data["email"]
        tag = data["tag"]
        list = data["list"]

        try:
            # Create/Update Contact
            url = activecampaign_url + "/api/3/contact/sync"
            data = {
                "contact": {
                    "email": email,
                }
            }
            headers = {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Api-Token": activecampaign_key,
            }

            response = requests.post(url, json=data, headers=headers)

            if response.status_code != 201 and response.status_code != 200:
                return Response(
                    {"error": "Algo salió mal enviando el mensaje. Intente de nuevo."},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            contact = response.json()

            try:
                contact_id = str(contact["contact"]["id"])
            except SystemError:
                return Response(
                    {"error": "Algo salió mal obteniendo el ID del contacto."},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            # ADDING OF THE TAG TO CONTACT
            url = activecampaign_url + "/api/3/contactTags"
            data = {"contactTag": {"contact": contact_id, "tag": tag}}

            response = requests.post(url, json=data, headers=headers)

            if response.status_code != 201 and response.status_code != 200:
                return Response(
                    {"error": "Algo salió mal agregando el tag al contacto. Intente de nuevo."},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            # ADD CONTACT TO OUR MASTER LIST AND DEMO LIST
            url = activecampaign_url + "/api/3/contactLists"
            data = {"contactList": {"list": list, "contact": contact_id, "status": "1"}}

            response = requests.post(url, json=data, headers=headers)

            if response.status_code != 201 and response.status_code != 200:
                return Response(
                    {"error": "Algo salió mal agregando el contacto a la lista de emails. Intente de nuevo."},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            return Response({"success": "Contacto agregado a la lista de emails."}, status=status.HTTP_200_OK)
        except SystemError:
            return Response(
                {"error": "Error agregando contacto a la lista de emails. Intenta de nuevo."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
