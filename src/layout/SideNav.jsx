import { NavLink, useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SideNav = () => {
  const location = useLocation();
    const { isPending, error, data } = useQuery({
        queryKey: ['sidenavpath'],
        queryFn: () => axios.get(`${BASE_URL}/api/side-nav-paths`)
    })

  return (
    <aside className="bg-[#d9d9d9] font-Druk-Bold p-10 overflow-y-auto overflow-x-hidden">
      <div className=" ">
        <h2 className="text-6xl text-neutral-900 mb-6">
          DOCUMENTATIONS
        </h2>

        <nav className="space-y-3 flex flex-col">
          {data?.data.map(({ name, path,id }) => {
            const isLoanManagementActive =
              location.pathname.startsWith(path) 

            return (
              <NavLink
                key={`documentation/guide/${id}`}
                to={`documentation/guide/${id}`}
                className={({ isActive }) =>
                  `pl-4 py-2 text-sm font-light tracking-wide transition-colors ${
                    isActive || isLoanManagementActive
                      ? "border-l-2 border-neutral-900 text-neutral-900"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`
                }
              >
                <span className="text-xl font-Druk-Medium tracking-wide">{name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
