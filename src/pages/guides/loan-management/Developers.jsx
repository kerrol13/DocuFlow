import { documentQuery, functionAppProcess } from "../../../data/loan-management/functionApp"
import FunctionApp from "../../../layout/FunctionApp"

const Developers = () => {
    return <FunctionApp processData={functionAppProcess} queryData={documentQuery}/>
}
export default Developers