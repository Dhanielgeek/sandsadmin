import { Home, Users, CalendarCheck2, ClipboardList } from "lucide-react";

const Overview = () => {
  // These values can later come from your API/backend
  const stats = [
    {
      title: "Total Properties",
      value: 120,
      icon: <Home className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Subscribers",
      value: 85,
      icon: <Users className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Booked",
      value: 45,
      icon: <CalendarCheck2 className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Inspections",
      value: 30,
      icon: <ClipboardList className="w-6 h-6 text-gray-700" />,
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex items-center gap-4 hover:shadow-lg transition"
        >
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100">
            {item.icon}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">
              {item.value}
            </h4>
            <p className="text-sm text-gray-500">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
