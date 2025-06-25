import { useState } from "react";
import toast from "react-hot-toast";

const RoomStatusUpdater = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!roomNumber || !status) {
      toast.error("Please fill all fields.");
      return;
    }

    toast.success(`Room ${roomNumber} updated to "${status}"`);
    console.log(`Updated Room ${roomNumber} status to: ${status}`);

    setRoomNumber("");
    setStatus("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-md mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-5 text-indigo-700">Update Room Status</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Room Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Room Number</label>
          <input
            type="text"
            placeholder="Enter room number"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Status Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select status</option>
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium"
        >
          Update Status
        </button>
      </form>
    </div>
  );
};

export default RoomStatusUpdater;
