import { Route, Routes } from "react-router-dom";
import Health from "./pages/Health";
import Meal from "./pages/Meal";
import Shelter from "./pages/Shelter";
import Wifi from "./pages/Wifi";
export const ContentContainer = () => {
  return (
    <div>
      <Routes>
        <Route path="/shelter" element={<Shelter />} />
        <Route path="/health" element={<Health />} />
        <Route path="/meal" element={<Meal />} />
        <Route path="/wifi" element={<Wifi />} />
      </Routes>
    </div>
  );
};
