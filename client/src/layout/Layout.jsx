import Sidebar from "../components/SideBar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white p-4 shadow-sm">
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-1 rounded w-1/3 text-sm"
          />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <span className="font-semibold text-sm">Tom Cook</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
