const AdminDashboard = () => {
  const stats = [
    { label: "Total Users", value: "2,250" },
    { label: "Vehicles", value: "415" },
    { label: "Bookings", value: "1,090" },
    { label: "Earnings", value: "Rs. 12.4L" },
    { label: "Reviews", value: "367" },
    { label: "Reports", value: "6" },
  ];

  const users = [
    {
      name: "Suman Karki",
      email: "suman@email.com",
      type: "Customer",
      status: "Active",
      joined: "Mar 12",
      avatar: "SK",
      color: "bg-blue-500",
    },
    {
      name: "Bikash Thapa",
      email: "bthapa@email.com",
      type: "Owner",
      status: "Active",
      joined: "Jan 4",
      avatar: "BT",
      color: "bg-orange-500",
    },
    {
      name: "Rajesh Hamal",
      email: "rajesh@email.com",
      type: "Customer",
      status: "Pending",
      joined: "Dec 30",
      avatar: "RH",
      color: "bg-yellow-500",
    },
    {
      name: "Anish Dahal",
      email: "anish@email.com",
      type: "Owner",
      status: "Active",
      joined: "Dec 4",
      avatar: "AD",
      color: "bg-green-500",
    },
  ];

  const bookings = [
    {
      vehicle: "Toyota Hiace",
      customer: "Hari Bahadur",
      dates: "Jan 15-18",
      status: "Active",
    },
    {
      vehicle: "Hyundai Creta",
      customer: "Anish Dahal",
      dates: "Jan 5-8",
      status: "Active",
    },
    {
      vehicle: "Royal Enfield",
      customer: "Rita Gurung",
      dates: "Jan 2-3",
      status: "Pending",
    },
  ];

  const months = [
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
  ];
  const chartData = [280, 340, 300, 480, 420, 610, 520, 730, 580];
  const maxValue = Math.max(...chartData);

  const actions = [
    { label: "+ Add Vehicle", color: "bg-orange-100 text-orange-600" },
    { label: "Manage Users", color: "bg-green-100 text-green-600" },
    { label: "Moderate Reports", color: "bg-red-100 text-red-600" },
    { label: "View Earnings", color: "bg-gray-100 text-gray-700" },
    { label: "Download Reports", color: "bg-gray-100 text-gray-700" },
    { label: "View Feedback", color: "bg-green-100 text-green-600" },
  ];

  return (
    <div className="flex-1 p-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-8 ">
        Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-6 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-800">
                  {stat.value}
                </p>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Users and Bookings */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-6 ">
            Recent Users
          </h2>
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Email</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full ${user.color} flex items-center justify-center text-white font-semibold text-sm`}
                      >
                        {user.avatar}
                      </div>
                      <span className="font-medium text-slate-700">
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-600 text-sm">{user.email}</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.type === "Owner"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {user.type}
                    </span>
                  </td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-600 text-sm">{user.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-6 ">
            Recent Bookings
          </h2>
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
                <th className="pb-3 font-medium">Vehicle</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Dates</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-4 font-medium text-slate-700">
                    {booking.vehicle}
                  </td>
                  <td className="py-4 text-gray-600">{booking.customer}</td>
                  <td className="py-4 text-gray-600 text-sm">
                    {booking.dates}
                  </td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Platform Trends and Quick Actions */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-2 ">
            Platform Trends
          </h2>
          <p className="text-sm text-gray-500 mb-6">Monthly Bookings</p>

          <div className="relative h-64">
            <svg className="w-full h-full" viewBox="0 0 800 250">
              <polyline
                points={chartData
                  .map(
                    (val, idx) =>
                      `${idx * 100 + 50},${250 - (val / maxValue) * 200}`
                  )
                  .join(" ")}
                fill="none"
                stroke="#f97316"
                strokeWidth="3"
              />
              {chartData.map((val, idx) => (
                <circle
                  key={idx}
                  cx={idx * 100 + 50}
                  cy={250 - (val / maxValue) * 200}
                  r="5"
                  fill="#f97316"
                />
              ))}
            </svg>
            <div className="flex justify-between mt-2 px-8">
              {months.map((month, idx) => (
                <span key={idx} className="text-xs text-gray-400">
                  {month}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-6 ">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {actions.map((action, index) => (
              <button
                key={index}
                className={`py-3 px-4 rounded-lg font-medium text-sm transition-all hover:shadow-md ${action.color}`}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
