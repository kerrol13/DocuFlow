import { NavLink } from "react-router"

const Header = ({ title, guidePath, devPath }) => {
    return (
        <header className="border-b border-neutral-100 text-neutral-900 ">
            <div className="max-w-3xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-light tracking-tight mb-2">
                    {title}
                </h1>
                <p className="text-neutral-500 font-light">Documentation</p>

                <div className="flex gap-8 mt-12">
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