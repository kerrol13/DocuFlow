import Main from "../../../layout/Main"
import steps, { keyNotes } from "../../../data/loan-management/steps"

const Steps = () => {
    return <Main keyNotes={keyNotes} steps={steps} />
}
export default Steps