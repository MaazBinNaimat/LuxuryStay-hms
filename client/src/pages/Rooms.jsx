import { useState } from "react";
import { BedDouble, CalendarPlus, Wrench, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import RoomInventory from "../components/rooms/RoomInventory";
import RoomBookingForm from "../components/rooms/RoomBookingForm";
import RoomStatusUpdater from "../components/rooms/RoomStatusUpdater";

const Rooms = () => {
  const [activeTab, setActiveTab] = useState("inventory");

  const renderTab = () => {
    switch (activeTab) {
      case "inventory":
        return <RoomInventory />;
      case "booking":
        return <RoomBookingForm />;
      case "status":
        return <RoomStatusUpdater />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Room Management</h1>
        <Link
          to="/add-room"
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          <Plus size={16} /> Add Room
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        <TabButton
          icon={<BedDouble size={16} />}
          label="Room Inventory"
          value="inventory"
          active={activeTab === "inventory"}
          onClick={() => setActiveTab("inventory")}
        />
        <TabButton
          icon={<CalendarPlus size={16} />}
          label="Room Booking"
          value="booking"
          active={activeTab === "booking"}
          onClick={() => setActiveTab("booking")}
        />
        <TabButton
          icon={<Wrench size={16} />}
          label="Status Update"
          value="status"
          active={activeTab === "status"}
          onClick={() => setActiveTab("status")}
        />
      </div>

      {/* Tab Content */}
      <div className="transition-opacity duration-300 ease-in-out opacity-100">
        {renderTab()}
      </div>
    </div>
  );
};

const TabButton = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded text-sm transition ${
      active
        ? "bg-indigo-600 text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    {icon}
    {label}
  </button>
);

export default Rooms;
