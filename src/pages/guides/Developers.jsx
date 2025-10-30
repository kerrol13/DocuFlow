import { useOutletContext } from "react-router";
import Main from "../../layout/Main";
import Dev from "../../layout/Dev";

const Developers = () => {
    const { devData, devKeyNotes, apiData } = useOutletContext();
    return (
        <>
            {apiData.length!=0 && <Dev apiData={apiData} />}
            <Main steps={devData} keyNotes={devKeyNotes} />
        </>
    )
}
export default Developers