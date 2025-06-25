import { useState } from "react";

const RoomInventory = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    { number: 101, type: "Deluxe", price: 200, status: "Available", description: "Spacious room with a sea view and king-size bed." },
    { number: 102, type: "Suite", price: 350, status: "Occupied", description: "Luxury suite with living area and balcony." },
    { number: 103, type: "Standard", price: 150, status: "Cleaning", description: "Comfortable standard room with essential amenities." },
    { number: 101, type: "Deluxe", price: 200, status: "Available", description: "Spacious room with a sea view and king-size bed." },
    { number: 102, type: "Suite", price: 350, status: "Occupied", description: "Luxury suite with living area and balcony." },
    { number: 103, type: "Standard", price: 150, status: "Cleaning", description: "Comfortable standard room with essential amenities." },
    { number: 101, type: "Deluxe", price: 200, status: "Available", description: "Spacious room with a sea view and king-size bed." },
    { number: 102, type: "Suite", price: 350, status: "Occupied", description: "Luxury suite with living area and balcony." },
    { number: 103, type: "Standard", price: 150, status: "Cleaning", description: "Comfortable standard room with essential amenities." },
    { number: 101, type: "Deluxe", price: 200, status: "Available", description: "Spacious room with a sea view and king-size bed." },
    { number: 102, type: "Suite", price: 350, status: "Occupied", description: "Luxury suite with living area and balcony." },
    { number: 103, type: "Standard", price: 150, status: "Cleaning", description: "Comfortable standard room with essential amenities." },
    { number: 101, type: "Deluxe", price: 200, status: "Available", description: "Spacious room with a sea view and king-size bed." },
    { number: 102, type: "Suite", price: 350, status: "Occupied", description: "Luxury suite with living area and balcony." },
    { number: 103, type: "Standard", price: 150, status: "Cleaning", description: "Comfortable standard room with essential amenities." },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rooms.map((room, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition cursor-pointer border border-gray-200"
            onClick={() => setSelectedRoom(room)}
          >
            <h3 className="text-lg font-semibold mb-2 text-indigo-700">Room {room.number}</h3>
            <p className="text-gray-600">Type: {room.type}</p>
            <p className="text-gray-600">Status: <span className="font-medium">{room.status}</span></p>
            <p className="text-gray-600">Price: <span className="font-semibold">${room.price}</span></p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[95%] sm:w-[90%] max-w-md animate-fadeIn relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setSelectedRoom(null)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Room {selectedRoom.number}</h2>
            <div className="space-y-2 text-gray-700 text-sm sm:text-base">
              <p><strong>Type:</strong> {selectedRoom.type}</p>
              <p><strong>Status:</strong> {selectedRoom.status}</p>
              <p><strong>Price:</strong> ${selectedRoom.price}</p>
              <p><strong>Description:</strong> {selectedRoom.description}</p>
            </div>
            <button
              className="mt-5 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
              onClick={() => setSelectedRoom(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomInventory;
