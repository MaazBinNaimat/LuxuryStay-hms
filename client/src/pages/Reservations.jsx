import { useState } from "react";
import ReservationForm from "../components/reservations/ReservationForm";
import ReservationList from "../components/reservations/ReservationList";
import CheckinForm from "../components/reservations/CheckinForm";
import CheckoutForm from "../components/reservations/CheckoutForm";
import { CalendarPlus, LogIn, LogOut, List } from "lucide-react";

const Reservations = () => {
  const [activeTab, setActiveTab] = useState("create");

  const renderTab = () => {
    switch (activeTab) {
      case "create":
        return <ReservationForm />;
      case "list":
        return <ReservationList />;
      case "checkin":
        return <CheckinForm />;
      case "checkout":
        return <CheckoutForm />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Reservations & Check-in/Out
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        <TabButton
          icon={<CalendarPlus size={18} />}
          label="New Reservation"
          value="create"
          active={activeTab === "create"}
          onClick={() => setActiveTab("create")}
        />
        <TabButton
          icon={<List size={18} />}
          label="All Reservations"
          value="list"
          active={activeTab === "list"}
          onClick={() => setActiveTab("list")}
        />
        <TabButton
          icon={<LogIn size={18} />}
          label="Check-in"
          value="checkin"
          active={activeTab === "checkin"}
          onClick={() => setActiveTab("checkin")}
        />
        <TabButton
          icon={<LogOut size={18} />}
          label="Check-out"
          value="checkout"
          active={activeTab === "checkout"}
          onClick={() => setActiveTab("checkout")}
        />
      </div>

      {/* Content */}
      <div className="transition-all duration-300 ease-in-out">{renderTab()}</div>
    </div>
  );
};

const TabButton = ({ icon, label, value, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all border ${
      active
        ? "bg-indigo-600 text-white border-indigo-600 shadow"
        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
    }`}
  >
    {icon}
    {label}
  </button>
);

export default Reservations;
