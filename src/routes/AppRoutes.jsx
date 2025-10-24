// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import AtGlance from '../Pages/About/AtGlance/AtGlance';
import AboutDistrict from '../Pages/About/AboutDistrict/AboutDistrict';
import DistrictProfile from '../Pages/About/DistrictProfile/DistrictProfile';
import History from '../Pages/About/History/History';
import PreviousCommissioners from '../Pages/About/PrevDc/PrevDc';
import Home from '../Pages/Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home Page */}
        <Route index element={<Home />} />
         {/* About Routes */}
        <Route path="about">
          <Route path="at-a-glance" element={<AtGlance />} />
          <Route path="about-district" element={<AboutDistrict />} />
          <Route path="district-profile" element={<DistrictProfile />} />
          <Route path="history" element={<History />} />
          <Route path="previous-commissioners" element={<PreviousCommissioners />} />
          {/* Add other about routes here */}
        </Route>
        {/* All other routes will show the home page for now */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;