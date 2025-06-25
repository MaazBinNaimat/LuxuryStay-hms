import { useState } from "react";
import toast from "react-hot-toast";

const AddRoomForm = ({ onAddRoom }) => {
  const [room, setRoom] = useState({
    number: "",
    type: "",
    price: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!room.number || !room.type || !room.price) {
      toast.error("Please fill all fields.");
      return;
    }

    onAddRoom(room);
    toast.success("Room added!");
    setRoom({ number: "", type: "", price: "", status: "Available" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-50 rounded shadow mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="number"
          value={room.number}
          onChange={handleChange}
          placeholder="Room Number"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="type"
          value={room.type}
          onChange={handleChange}
          placeholder="Room Type"
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="price"
          value={room.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 rounded w-full"
        />
        <select
          name="status"
          value={room.status}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option>Available</option>
          <option>Occupied</option>
          <option>Cleaning</option>
          <option>Maintenance</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Add Room
      </button>
    </form>
  );
};

export default AddRoomForm;
