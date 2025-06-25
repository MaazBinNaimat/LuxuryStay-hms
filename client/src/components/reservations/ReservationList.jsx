const ReservationList = () => {
  const reservations = [
    {
      id: 1,
      guest: "John Doe",
      room: "Deluxe",
      checkIn: "2025-06-28",
      checkOut: "2025-07-01",
      status: "Reserved",
    },
    {
      id: 2,
      guest: "Emily Smith",
      room: "Suite",
      checkIn: "2025-06-25",
      checkOut: "2025-06-30",
      status: "Checked-In",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Reserved":
        return "bg-yellow-100 text-yellow-700";
      case "Checked-In":
        return "bg-green-100 text-green-700";
      case "Checked-Out":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-5xl mx-auto overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">All Reservations</h2>
      <table className="w-full border-separate border-spacing-y-2 text-sm">
        <thead className="text-left text-gray-600">
          <tr>
            <th className="p-2">Guest</th>
            <th className="p-2">Room</th>
            <th className="p-2">Check-In</th>
            <th className="p-2">Check-Out</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res.id} className="bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm">
              <td className="p-3 font-medium text-gray-800">{res.guest}</td>
              <td className="p-3">{res.room}</td>
              <td className="p-3">{res.checkIn}</td>
              <td className="p-3">{res.checkOut}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    res.status
                  )}`}
                >
                  {res.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
