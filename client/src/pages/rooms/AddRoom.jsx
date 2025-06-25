import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddRoom = () => {
  const [room, setRoom] = useState({
    number: "",
    type: "",
    price: "",
    status: "Available",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!room.number || !room.type || !room.price) {
      toast.error("Please fill all fields.");
      return;
    }

    // Later: Save to DB or backend
    toast.success("Room added!");
    navigate("/rooms");
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Add New Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="number"
          value={room.number}
          onChange={handleChange}
          placeholder="Room Number"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="type"
          value={room.type}
          onChange={handleChange}
          placeholder="Room Type"
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          value={room.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 rounded"
        />
        <select
          name="status"
          value={room.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Available</option>
          <option>Occupied</option>
          <option>Cleaning</option>
          <option>Maintenance</option>
        </select>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Save Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
