import { Outlet, Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-800 text-white p-4 md:min-h-screen">
        <Link
          to="/"
          className="text-2xl font-bold mb-4 block hover:text-gray-300 text-center md:text-left"
        >
          Admin Dashboard
        </Link>

        <nav>
          <ul className="flex md:flex-col justify-center md:space-y-2 space-x-4 md:space-x-0 text-center">
            <li>
              <Link
                to="/admin/dashboard/upload"
                className="block hover:bg-gray-700 p-2 rounded transition-colors"
              >
                Upload
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
