import axios from "axios";
import Main from "../../layout/Main"
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { LoaderCircleIcon } from "lucide-react";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AddNewProcess = () => {
    const [data, setData] = useState(null)
    const [stepsSetter, setStepsSetter] = useState(null)
    const [sideNavPathId, setSideNavPathId] = useState(null)
    const [name, setName] = useState(null)
    const [instruction, setInstruction] = useState(null)
    const { mutate, isPending, error } = useMutation({
        mutationFn: (payload) => axios.post(`${BASE_URL}/api/chat-completion`, payload),
        onSuccess: (response) => {
            const match = response.data.match(/```json([\s\S]*?)```/);
            const steps = match ? match[1].trim() : null;
            const parsedSteps = JSON.parse(steps);
            setData(parsedSteps)
        },
    })

    const { mutate: addNavPath} = useMutation({
        mutationFn: (payload) => axios.post(`${BASE_URL}/api/side-nav-paths`, payload),
           onSuccess: (response) => {
            setSideNavPathId(response?.data)
        },
    })

        const { mutate: addDocumentStep} = useMutation({
        mutationFn: (payload) => axios.post(`${BASE_URL}/api/documentation-steps/multiple`, payload),
    })

    return (
        <div className="p-5">
            {!isPending && <>
                <input required={true} className="border" onChange={(e) => setName(e.target.value)} type="text" />
                <button className=" cursor-pointer" onClick={() => addNavPath({ name })}>Add Navigation Path</button>

                <input required={true} className="border" onChange={(e) => setInstruction(e.target.value)} type="text" />
                <button className=" cursor-pointer" onClick={() => mutate({ instruction,sideNavPathId })}>Generate</button></>
            }
            {isPending && <LoaderCircleIcon className=" animate-spin" />}
            {data && <Main keyNotes={null} steps={data} setStepsSetter={setStepsSetter}/>}
            {data && <button className=" cursor-pointer" onClick={() => addDocumentStep(stepsSetter)}>Add Documentation</button>}
        </div>
    )
}
export default AddNewProcess