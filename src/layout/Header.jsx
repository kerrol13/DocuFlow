import { NavLink } from "react-router"

const Header = ({ title, guidePath, devPath }) => {
    return (
        <header className="border-b border-[#d9d9d9]  text-neutral-900 ">
            <div className="max-w-3xl mx-auto px-6 py-16">
                <h1 className="text-8xl font-Druk-Bold mb-2 ">
                    {title}
                </h1>
                <p className="text-2xl font-Druk-Medium tracking-wide ">Documentation</p>

                <div className="flex gap-8 mt-12 font-monument-grotesk-regular">
                    <NavLink
                        to={guidePath}
                        className={({ isActive }) =>
                            `pb-2 text-sm font-light tracking-wide transition-colors ${isActive
                                ? "border-b-2 border-neutral-900 text-neutral-900"
                                : "text-neutral-500 hover:text-neutral-900"
                            }`
                        }>

                        Guide
                    </NavLink>
                    <NavLink
                        to={devPath}
                        className={({ isActive }) =>
                            `pb-2 text-sm font-light tracking-wide transition-colors ${isActive
                                ? "border-b-2 border-neutral-900 text-neutral-900"
                                : "text-neutral-500 hover:text-neutral-900"
                            }`
                        }>
                        Developers
                    </NavLink>
                </div>
            </div>
        </header>
    )
}
export default Header