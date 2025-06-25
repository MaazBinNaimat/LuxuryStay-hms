import { useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const [roomNumber, setRoomNumber] = useState("");

  const handleCheckout = (e) => {
    e.preventDefault();
    toast.success(`Successfully checked out room #${roomNumber}`);
    setRoomNumber("");
  };

  return (
    <form
      onSubmit={handleCheckout}
      className="bg-white p-6 rounded-xl shadow-md max-w-md w-full space-y-5"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Guest Check-out</h2>

      <div className="space-y-2">
        <label htmlFor="roomNumber" className="block text-sm font-medium text-gray-600">
          Room Number
        </label>
        <input
          id="roomNumber"
          type="text"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          placeholder="Enter Room Number"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg w-full transition"
      >
        Check Out Guest
      </button>
    </form>
  );
};

export default CheckoutForm;
