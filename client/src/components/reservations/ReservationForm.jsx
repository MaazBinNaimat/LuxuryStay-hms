import { useState } from "react";
import toast from "react-hot-toast";

const ReservationForm = () => {
  const [form, setForm] = useState({
    guestName: "",
    email: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation:", form);
    toast.success("Reservation created successfully!");
    setForm({
      guestName: "",
      email: "",
      roomType: "",
      checkIn: "",
      checkOut: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto space-y-5 border"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Create New Reservation</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-600 mb-1 block">Guest Name</label>
          <input
            type="text"
            name="guestName"
            value={form.guestName}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600 mb-1 block">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600 mb-1 block">Room Type</label>
          <select
            name="roomType"
            value={form.roomType}
            onChange={handleChange}
            className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select Room Type</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600 mb-1 block">Check-In Date</label>
          <input
            type="date"
            name="checkIn"
            value={form.checkIn}
            onChange={handleChange}
            className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600 mb-1 block">Check-Out Date</label>
          <input
            type="date"
            name="checkOut"
            value={form.checkOut}
            onChange={handleChange}
            className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition duration-200"
      >
        Book Reservation
      </button>
    </form>
  );
};

export default ReservationForm;
