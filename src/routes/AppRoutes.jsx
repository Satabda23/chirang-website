// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import ContactUs from '../Pages/Contact Us/Contact Us';


const AppRoutes = () => {
  return (
    
   
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<Home />} /> */}
        
        {/* All other routes will show the home page for now */}
        <Route path="*" element={<Home />} />
        <Route path="contact-us" element={<ContactUs />} />

      </Route>
    </Routes>

     
    
  );
};

export default AppRoutes;