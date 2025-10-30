import Main from "../../layout/Main"
import { useOutletContext } from "react-router"

const Steps = () => {
  const { guideData,guideKeynotesData } = useOutletContext();
    return <> {guideData && <Main keyNotes={guideKeynotesData} steps={guideData} />} </>
}
export default Steps