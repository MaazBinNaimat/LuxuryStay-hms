import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Sidebar from './components/SideBar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Reservations from './pages/Reservations';
import Staff from './pages/Staff';
import Housekeeping from './pages/Housekeeping';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import AddRoom from './pages/rooms/AddRoom'; // 👈 new import

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/add-room" element={<AddRoom />} /> {/* 👈 new route */}
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/housekeeping" element={<Housekeeping />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
