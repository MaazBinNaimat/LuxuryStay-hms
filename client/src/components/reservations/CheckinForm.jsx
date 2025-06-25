import { useState } from "react";
import toast from "react-hot-toast";

const CheckinForm = () => {
  const [reservationId, setReservationId] = useState("");

  const handleCheckin = (e) => {
    e.preventDefault();
    toast.success(`Successfully checked in reservation #${reservationId}`);
    setReservationId("");
  };

  return (
    <form
      onSubmit={handleCheckin}
      className="bg-white p-6 rounded-xl shadow-md max-w-md w-full space-y-5"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Guest Check-in</h2>

      <div className="space-y-2">
        <label htmlFor="reservationId" className="block text-sm font-medium text-gray-600">
          Reservation ID
        </label>
        <input
          id="reservationId"
          type="text"
          value={reservationId}
          onChange={(e) => setReservationId(e.target.value)}
          placeholder="Enter Reservation ID"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg w-full transition"
      >
        Check In Guest
      </button>
    </form>
  );
};

export default CheckinForm;
