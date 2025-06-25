import {
  BedDouble,
  Users,
  CalendarDays,
  DollarSign,
  CheckCircle,
  Loader2,
  Wrench,
  Hotel,
} from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";

const Home = () => {
  const today = new Date().toDateString();

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    else if (hour < 18) return "Good Afternoon";
    else return "Good Evening";
  };

  const revenueData = [
    { month: "Jan", revenue: 8000 },
    { month: "Feb", revenue: 12000 },
    { month: "Mar", revenue: 18000 },
    { month: "Apr", revenue: 15000 },
  ];

  const occupancyData = [
    { name: "Occupied", value: 70 },
    { name: "Available", value: 20 },
    { name: "Maintenance", value: 10 },
  ];

  const roomStatus = [
    { label: "Occupied", count: 45, color: "bg-indigo-500", icon: <Hotel size={16} /> },
    { label: "Available", count: 60, color: "bg-green-500", icon: <CheckCircle size={16} /> },
    { label: "Maintenance", count: 10, color: "bg-orange-500", icon: <Wrench size={16} /> },
    { label: "Cleaning", count: 5, color: "bg-yellow-500", icon: <Loader2 size={16} /> },
  ];

  const COLORS = ["#4f46e5", "#10b981", "#f59e0b"];

  return (
    <div className="p-6">
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-indigo-700">{greeting()}, Admin 👋</h1>
        <p className="text-gray-600">{today}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard icon={<BedDouble size={28} />} label="Total Rooms" value="120" />
        <StatCard icon={<CalendarDays size={28} />} label="Today's Bookings" value="32" />
        <StatCard icon={<Users size={28} />} label="Staff Members" value="25" />
        <StatCard icon={<DollarSign size={28} />} label="Revenue" value="$15,200" />
      </div>

      {/* Room Status Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {roomStatus.map((item, index) => (
          <div key={index} className="flex items-center bg-white p-4 rounded shadow gap-3">
            <div className={`p-2 text-white rounded ${item.color}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-lg font-bold">{item.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Room Occupancy</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={occupancyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {occupancyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Check-ins */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Upcoming Check-ins</h2>
          <table className="w-full text-sm">
            <thead className="text-gray-600 border-b">
              <tr>
                <th>Guest</th>
                <th>Room</th>
                <th>Check-in</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2">Ahmed Raza</td>
                <td>203</td>
                <td>2025-06-25</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2">Fatima Shah</td>
                <td>109</td>
                <td>2025-06-25</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Staff On Duty */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Staff on Duty</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Ali Khan (Receptionist)</span>
              <span className="text-green-500 font-medium">Online</span>
            </li>
            <li className="flex justify-between">
              <span>Sana Tariq (Housekeeping)</span>
              <span className="text-green-500 font-medium">Online</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white shadow rounded p-4 flex items-center gap-4">
    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  </div>
);

export default Home;
