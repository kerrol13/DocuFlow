import Main from "../../../layout/Main"
import steps, { keyNotes } from "../../../data/new-shift-schedule/steps"

const Steps = () => {
    return <Main keyNotes={keyNotes} steps={steps} />
}
export default Steps