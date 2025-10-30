import { NavLink, useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SideNav = () => {
  const location = useLocation();
    const { isPending, error, data } = useQuery({
        queryKey: ['sidenavpath'],
        queryFn: () => axios.get(`https://localhost:7018/api/side-nav-paths`)
    })

  return (
    <aside className="w-64 border-r border-neutral-100">
      <div className="sticky top-0 p-6">
        <h2 className="text-3xl font-light text-neutral-900 mb-6">
          Documentations
        </h2>

        <nav className="space-y-3 flex flex-col">
          {data?.data.map(({ name, path,id }) => {
            const isLoanManagementActive =
              location.pathname.startsWith(path) 

            return (
              <NavLink
                key={path}
                to={`documentation/guide/${id}`}
                className={({ isActive }) =>
                  `pl-4 py-2 text-sm font-light tracking-wide transition-colors ${
                    isActive || isLoanManagementActive
                      ? "border-l-2 border-neutral-900 text-neutral-900"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`
                }
              >
                <span className="text-sm font-light">{name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
