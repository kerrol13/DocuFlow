import { Outlet, useMatches, useParams } from "react-router"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import SideNav from "../layout/SideNav"
import ScrollToTop from "../components/ScrollToTop"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const GUIDE = 1;
const DEVELOPERS = 2;

const Root = () => {
    const { id } = useParams();
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData', id],
        queryFn: () => axios.get(`${BASE_URL}/api/side-nav-paths/${id}`)
    })
    const guideData = data?.data.steps.filter(x => x.documentType == GUIDE)
    const guideKeynotesData = data?.data.keyNotes.filter(x => x.documentType == GUIDE)

    const devData = data?.data.steps.filter(x => x.documentType == DEVELOPERS)
    const apiData = data?.data.apiMetadata;
    const devKeynotesData = data?.data.keyNotes.filter(x => x.documentType == DEVELOPERS)

    return (
        <div className="h-screen w-screen bg-white flex">
            <ScrollToTop pathname={id} />
            <SideNav />
            <div className="w-full overflow-y-scroll overflow-x-hidden outlet-container">
                {data?.data &&
                    <>
                        <Header title={data?.data.name} guidePath={`/documentation/guide/${id}`} devPath={`/documentation/dev/${id}`} />
                        <Outlet context={{ guideData, guideKeynotesData, devData, devKeynotesData, apiData }} />
                        <Footer />
                    </>
                }
            </div>

        </div>
    )
}
export default Root