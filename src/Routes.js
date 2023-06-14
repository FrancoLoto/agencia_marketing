import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Services from 'containers/pages/Services';
import About from 'containers/pages/About';
import Blog from 'containers/pages/Blog';
import Contact from 'containers/pages/Contact';
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import { AnimatePresence } from 'framer-motion'
import Category from 'containers/pages/Category';
import PostDetail from 'containers/pages/PostDetail';
import Terms from 'containers/pages/Terms';
import PrivacyPolicy from 'containers/pages/PrivacyPolicy';

function AnimatedRoutes() {

    const location = useLocation()

    return(
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />

            {/* Home Display */}
            <Route path="/inicio" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<PostDetail />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy/policy" element={<PrivacyPolicy />} />
          </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes