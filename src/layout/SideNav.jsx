import { NavLink, useLocation, useNavigate } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import OverlayAdd from "../components/OverlayAdd";
import Skeleton from "react-loading-skeleton";
import Button from "../components/Button";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TITTLE = "NEW DOCUMENT";

const SideNav = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();


  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['sidenavpath'],
    queryFn: () => axios.get(`${BASE_URL}/api/documents`)
  })

  const { mutate: addDocument } = useMutation({
    mutationFn: (payload) => axios.post(`${BASE_URL}/api/documents`, payload),
    onSuccess: (response) => {
      refetch();
      navigate(`documentation/guide/${response?.data}`)
      setIsOpen(false)
    },
  })

  return (
    <aside className="bg-[#d9d9d9] font-Druk-Bold p-10 overflow-y-auto overflow-x-hidden">
      <div className=" ">
        <h2 className="text-6xl text-neutral-900 ">
          DOCUMENTATIONS
        </h2>
          <Button text="ADD DOCUMENTATION" onClick={() => setIsOpen(true)}/>
        <nav className="space-y-3 flex flex-col">
          {data?.data.map(({ name, path, id }) => {
            const isActive = location.pathname.includes(id);
            return (
              <NavLink
                key={id}
                to={`documentation/guide/${id}`}
                className={`pl-4 py-2 text-sm font-light tracking-wide transition-colors ${isActive
                  ? "border-l-2 border-neutral-900 text-neutral-900"
                  : "text-neutral-500 hover:text-neutral-900"
                  }`}
              >
                <span className="text-xl font-Druk-Medium tracking-wide">{name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
      <OverlayAdd isOpen={isOpen} setIsOpen={setIsOpen} modalRef={modalRef} title={TITTLE} action={addDocument} />
    </aside>
  );
};

export default SideNav;
