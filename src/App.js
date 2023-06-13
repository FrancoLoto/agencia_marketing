import store from './store';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from 'Routes';


function App() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>MG Seguridad Privada | Inicio</title>
        <meta name="description" content="Seguridad a cada paso."/> 
        <meta name="keywords" content='mg seguridad privada, seguridad general conesa, seguridad privada conesa'/>
        <meta name="robots" content='all'/>
        <link rel="canonical" href="https://www.mgseguridadprivada.com.ar/"/>
        <meta name="author" content="Seguridad"/>
        <meta name="publisher" content="Franco Loto"/>

        {/* Social Media Tags */}
        <meta property='og:title' content='MG Seguridad Privada'/>
        <meta property='og:description' content='Seguridad a cada paso.'/>
        <meta property='og:url' content='https://www.mgseguridadprivada.com.ar/'/>
        <meta property='og:image' content='https://postimg.cc/060wgC76'/>

        <meta name="twitter:title" content='MG Seguridad Privada' />
        <meta
            name="twitter:decription"
            description='Seguridad a cada paso.'
        />
        <meta name="twitter:image" content="https://postimg.cc/060wgC76"/>
        <meta name="twitter:card" content="summary_large_image"/>

      </Helmet>

      <Provider store={store}>

        <Router>
          <AnimatedRoutes/>
        
        </Router>
      </Provider>
    </HelmetProvider>
    
  );
}

export default App;
