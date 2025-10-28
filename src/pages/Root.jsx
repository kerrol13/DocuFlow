import { Outlet, useMatches } from "react-router"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import SideNav from "../layout/SideNav"
import ScrollToTop from "../components/ScrollToTop"

const Root = () => {
    const matches = useMatches();
    const current = matches.find((m) => m.handle?.title);
    const title = current?.handle?.title || "Documentation";
    const guidePath = current?.handle?.guide || "/";
    const devPath = current?.handle?.dev || "/";

    return (
        <div className="h-screen w-screen bg-white flex">
            <ScrollToTop pathname={title}/>
            <SideNav />
            <div className="w-full overflow-y-scroll overflow-x-hidden outlet-container">
                <Header title={title} guidePath={guidePath} devPath={devPath}/>
                <Outlet />
                <Footer />
            </div>

        </div>
    )
}
export default Root