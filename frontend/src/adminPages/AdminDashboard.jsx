import { Outlet, Link } from 'react-router-dom'; // <-- Import Link

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <Link to="/" className="text-xl font-bold mb-6 block hover:text-gray-300">
          Admin Dashboard
        </Link> {/* <-- Made it clickable */}
        
        <nav>
          <ul className="space-y-2">
            <li><a href="/admin/dashboard/upload" className="block hover:bg-gray-700 p-2 rounded">Upload</a></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
