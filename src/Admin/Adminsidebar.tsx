import React from "react";
import {
  X,
  LayoutDashboard,
  CreditCard,
  Shield,
  Home,
  Users,
  CalendarCheck,
  ClipboardList,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  name: string;
  icon: React.ReactElement;
  path: string;
}

interface AdminSidebarProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ active, setActive }) => {
  const [selectedMenu, setSelectedMenu] = React.useState<number | null>(0);

  const menuItems: MenuItem[] = [
    {
      name: "Overview",
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: "/admin/overview",
    },
    {
      name: "Upload Property",
      icon: <CreditCard className="w-5 h-5" />,
      path: "/admin/transactions",
    },
    {
      name: "Properties",
      icon: <Home className="w-5 h-5" />,
      path: "/admin/properties",
    },
    {
      name: "Subscribers",
      icon: <Users className="w-5 h-5" />,
      path: "/admin/subscribers",
    },
    {
      name: "Booked",
      icon: <CalendarCheck className="w-5 h-5" />,
      path: "/admin/booked",
    },
    {
      name: "Inspections",
      icon: <ClipboardList className="w-5 h-5" />,
      path: "/admin/inspections",
    },
  ];

  const navigate = useNavigate();
  const handleMenuClick = (path: string, index: number) => {
    setSelectedMenu(index);
    navigate(path);
    setActive(false);
  };

  return (
    <div className="relative">
      {active && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setActive(false)}
        />
      )}

      <aside className={`admin-sidebar ${active ? "active" : ""}`}>
        {/* Background */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Close button */}
        <button className="close-btn" onClick={() => setActive(!active)}>
          <X className="w-5 h-5" />
        </button>

        <div className="sidebar-inner">
          {/* Logo section */}
          <div className="logo-section">
            <div className="logo-container">
              <div className="logo-icon">
                <div className="w-8 h-8 bg-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-black" />
                </div>
              </div>
              <div className="logo-text">
                <span className="brand-subtitle">S&Sprestige</span>
              </div>
            </div>
            <div className="logo-divider"></div>
          </div>

          {/* Navigation */}
          <nav className="navigation">
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    selectedMenu === index ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick(item.path, index)}
                >
                  <div className="nav-content">
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-text">{item.name}</span>
                  </div>
                  {selectedMenu === index && (
                    <div className="active-indicator"></div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="sidebar-footer">
            <div className="user-info">
              <div className="user-avatar">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-black text-sm font-medium">A</span>
                </div>
              </div>
              <div className="user-details">
                <span className="user-name">Administrator</span>
                <span className="user-status">Super Admin</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .admin-sidebar {
            width: 100%;
            max-width: 16rem;
            min-width: 16rem;
            height: 100vh;
            position: fixed;
            left: -20rem;
            top: 0;
            bottom: 0;
            z-index: 30;
            transition: all 0.4s ease;
            border-right: 1px solid rgba(0,0,0,0.1);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
          }

          @media (min-width: 768px) {
            .admin-sidebar { position: relative; left: 0; }
          }

          .admin-sidebar.active { left: 0; }

          .close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            z-index: 10;
            background: rgba(0,0,0,0.05);
            border: 1px solid rgba(0,0,0,0.1);
            color: #111;
            padding: 0.5rem;
            border-radius: 0.75rem;
            cursor: pointer;
            transition: all 0.2s ease;
            backdrop-filter: blur(8px);
          }
          .close-btn:hover {
            background: rgba(0,0,0,0.1);
            transform: scale(1.05);
          }
          @media (min-width: 768px) { .close-btn { display: none; } }

          .sidebar-inner {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 1.5rem 1rem;
            position: relative;
            z-index: 5;
          }

          .logo-container { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem; }
          .brand-name { color: #111; font-size: 1.25rem; font-weight: 700; }
          .brand-subtitle { color: #555; font-size: 0.75rem; font-weight: 500; }
          .logo-divider { height: 1px; background: #e5e5e5; margin-top: 1rem; }

          .navigation { flex: 1; overflow-y: auto; }
          .nav-list { display: flex; flex-direction: column; gap: 0.5rem; margin: 0; padding: 0; list-style: none; }

          .nav-item { cursor: pointer; border-radius: 0.75rem; transition: all 0.3s ease; }
          .nav-item:hover { background: #f3f3f3; transform: translateX(4px); }
          .nav-item.active { background: #e5e5e5; border: 1px solid #d1d1d1; }

          .nav-content { display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1rem; }
          .nav-icon { color: #333; }
          .nav-text { color: #222; font-size: 0.95rem; font-weight: 500; }

          .nav-item.active .nav-icon, .nav-item.active .nav-text { color: #000; }

          .active-indicator {
            position: absolute;
            right: 0; top: 50%; transform: translateY(-50%);
            width: 3px; height: 60%; background: #000; border-radius: 2px 0 0 2px;
          }

          .sidebar-footer { margin-top: auto; padding-top: 1.5rem; border-top: 1px solid #e5e5e5; }
          .user-info { display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: #f9f9f9; border-radius: 0.75rem; border: 1px solid #e5e5e5; }
          .user-name { color: #111; font-size: 0.875rem; font-weight: 600; }
          .user-status { color: #555; font-size: 0.75rem; }
        `}</style>
      </aside>
    </div>
  );
};

export default AdminSidebar;
