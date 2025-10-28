import { apiGetData, apiPostData } from "../../../data/new-shift-schedule/json"
import { pluginProcess } from "../../../data/new-shift-schedule/pluginsData"
import Dev from "../../../layout/Dev"
import Plugins from "../../../layout/Plugins"

const Developers = () => {
    return (   <>
    <Dev apiData={[apiGetData,apiPostData]}/>
   <Plugins data={pluginProcess}/>
    </>)
 
}
export default Developers