import { useState } from "react";
import toast from "react-hot-toast";

const RoomBookingForm = () => {
  const [form, setForm] = useState({
    guestName: "",
    roomNumber: "",
    checkIn: "",
    checkOut: "",
  });

  const [bookingSummary, setBookingSummary] = useState(null);

  // Demo: Available rooms
  const availableRooms = [
    { number: "101", type: "Deluxe" },
    { number: "103", type: "Standard" },
    { number: "105", type: "Suite" },
  ];

  const bookedRooms = ["102", "201"]; // hardcoded demo

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { guestName, roomNumber, checkIn, checkOut } = form;

    if (!guestName || !roomNumber || !checkIn || !checkOut) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
      toast.error("Check-out must be after check-in.");
      return;
    }

    if (bookedRooms.includes(roomNumber)) {
      toast.error(`Room ${roomNumber} is already booked.`);
      return;
    }

    setBookingSummary({ ...form });
    toast.success("Room booked successfully!");

    setForm({
      guestName: "",
      roomNumber: "",
      checkIn: "",
      checkOut: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto mt-4">
      <h2 className="text-2xl font-semibold mb-5 text-indigo-700">Room Booking</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Guest Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Guest Name</label>
          <input
            type="text"
            name="guestName"
            value={form.guestName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Room Number Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Room Number</label>
          <select
            name="roomNumber"
            value={form.roomNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a room</option>
            {availableRooms.map((room) => (
              <option key={room.number} value={room.number}>
                Room {room.number} - {room.type}
              </option>
            ))}
          </select>
        </div>

        {/* Dates */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-In</label>
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-Out</label>
            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium transition"
        >
          Book Room
        </button>
      </form>

      {/* Booking Summary */}
      {bookingSummary && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">Booking Summary</h3>
          <p><strong>Guest:</strong> {bookingSummary.guestName}</p>
          <p><strong>Room:</strong> {bookingSummary.roomNumber}</p>
          <p><strong>Check-In:</strong> {bookingSummary.checkIn}</p>
          <p><strong>Check-Out:</strong> {bookingSummary.checkOut}</p>
        </div>
      )}
    </div>
  );
};

export default RoomBookingForm;
