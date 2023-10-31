from rest_framework import permissions, status
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from slugify import slugify

from apps.category.models import Category

from .models import Post, ViewCount
from .paginacion import SmallSetPagination
from .permissions import AuthorPermission, IsPostAuthorOrReadOnly
from .serializers import PostSerializer


# Vista para listar todos los blogs (público)
class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.postobjects.all().exists():
            posts = Post.postobjects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostSerializer(results, many=True)

            return paginator.get_paginated_response({"posts": serializer.data})
        else:
            return Response({"error": "No posts found"}, status=status.HTTP_404_NOT_FOUND)


# Vista para listar blogs por categoría (público)
class ListPostByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.postobjects.all().exists():
            slug = request.query_params.get("slug")
            category = Category.objects.get(slug=slug)

            posts = Post.postobjects.order_by("-published").all()

            # Filtrar categoría sola
            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)
            # Si esta categoría padre tiene hijos. filtrar por la categoría padre y sus hijos
            else:
                sub_categories = Category.objects.filter(parent=category)
                filtered_categories = [category]

                for cat in sub_categories:
                    filtered_categories.append(cat)

                filtered_categories = tuple(filtered_categories)
                posts = posts.filter(category__in=filtered_categories)

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostSerializer(results, many=True)

            return paginator.get_paginated_response({"posts": serializer.data})
        else:
            return Response({"error": "No posts found"}, status=status.HTTP_404_NOT_FOUND)


# Vista para ver un blog individual con contador de vistas
class PostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, slug, format=None):
        if Post.objects.filter(slug=slug).exists():
            post = Post.objects.get(slug=slug)
            serializer = PostSerializer(post)

            address = request.META.get("HTTP_X_FORWARDED_FOR")
            if address:
                ip = address.split(",")[-1].strip()
            else:
                ip = request.META.get("REMOTE_ADDR")

            if not ViewCount.objects.filter(post=post, ip_address=ip):
                view = ViewCount(post=post, ip_address=ip)
                view.save()
                post.views += 1
                post.save()

            return Response({"post": serializer.data}, status=status.HTTP_200_OK)

        else:
            return Response({"error": "Post no existe"}, status=status.HTTP_404_NOT_FOUND)


# Vista para listar blogs de un autor (requiere autenticación)
class AuthorBlogListView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        user = self.request.user

        if Post.objects.filter(author=user).exists():
            posts = Post.objects.filter(author=user)

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostSerializer(results, many=True)

            return paginator.get_paginated_response({"posts": serializer.data})
        else:
            return Response({"error": "No posts found"}, status=status.HTTP_404_NOT_FOUND)


# Vista para editar un blog (requiere ser el autor)
class EditBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly,)
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):

        data = self.request.data
        slug = data["slug"]

        post = Post.objects.get(slug=slug)

        # Actualizar los campos del blog si se proporcionan
        if data["title"]:
            if not (data["title"] == "undefined"):
                post.title = data["title"]
                post.save()

        if data["new_slug"]:
            if not (data["new_slug"] == "undefined"):
                post.slug = slugify(data["new_slug"])
                post.save()
        if data["description"]:
            if not (data["description"] == "undefined"):
                post.description = data["description"]
                post.save()
        if data["time_read"]:
            if not (data["time_read"] == "undefined"):
                post.time_read = data["time_read"]
                post.save()
        if data["content"]:
            if not (data["content"] == "undefined"):
                post.content = data["content"]
                post.save()

        if data["category"]:
            if not (data["category"] == "undefined"):
                category_id = int(data["category"])
                category = Category.objects.get(id=category_id)
                post.category = category
                post.save()

        if data["thumbnail"]:
            if not (data["thumbnail"] == "undefined"):
                post.thumbnail = data["thumbnail"]
                post.save()

        return Response({"success": "Post edited"})


# Vista para cambiar el estado de un blog a borrador (requiere ser el autor)
class DraftBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly,)

    def put(self, request, format=None):
        data = self.request.data
        slug = data["slug"]

        post = Post.objects.get(slug=slug)

        post.status = "draft"
        post.save()

        return Response({"success": "Post edited"})


# Vista para cambiar el estado de un blog a publicado (requiere ser el autor)
class PublishBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly,)

    def put(self, request, format=None):
        data = self.request.data
        slug = data["slug"]

        post = Post.objects.get(slug=slug)

        post.status = "published"
        post.save()

        return Response({"success": "Post edited"})


# Vista para eliminar un blog (requiere ser el autor)
class DeleteBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly,)

    def delete(self, request, slug, format=None):
        post = Post.objects.get(slug=slug)

        post.delete()

        return Response({"success": "Post edited"})


# Vista para crear un nuevo blog (requiere ser el autor)
class CreateBlogPostView(APIView):
    permission_classes = (AuthorPermission,)

    def post(self, request, format=None):
        user = self.request.user
        Post.objects.create(author=user)

        return Response({"success": "Post edited"})
