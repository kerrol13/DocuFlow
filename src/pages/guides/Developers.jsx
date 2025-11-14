import { useOutletContext, useParams } from "react-router";
import Main from "../../layout/Main";
import Dev from "../../layout/Dev";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Developers = () => {
    const { devData, devKeyNotes, apiData } = useOutletContext();
    const [data, setData] = useState(null)
    const [instruction, setInstruction] = useState(null)
    const { id } = useParams();


    const { mutate, isPending } = useMutation({
        mutationFn: (payload) => axios.post(`${BASE_URL}/api/chat-completion/dev`, payload),
        onSuccess: (response) => {
            const jsonText = response.data.replace(/```json|```/g, '').trim();
            const parsed = JSON.parse(jsonText);
            setData(parsed);
        },
    })

    const { mutate: addDocumentStep, isPending: pendingDocument, isSuccess } = useMutation({
        mutationFn: (payload) => axios.post(`${BASE_URL}/api/api-metadata/multiple`, payload),
    })

    console.log(data)

    return (
        <>
            {data?.steps && !isSuccess && <Button onClick={handleSubmit} text="ADD DOCUMENTATION" isPending={pendingDocument} />}
            {(apiData && apiData.length > 0) || data ?
                <>
                    <Dev apiData={apiData.length > 0 ? apiData : data} />
                    {data && !isSuccess && <Button onClick={() => addDocumentStep(data)} text="ADD DOCUMENTATION" isPending={pendingDocument} />}
                </>
                :
                <div className="max-w-3xl mx-auto px-6 pt-10 max-h-[300px] font-monument-grotesk-regular">
                    <TextArea onChange={(e) => setInstruction(e.target.value)} />
                    <Button text="GENERATE DOCUMENTATION" isPending={isPending} onClick={() => mutate({ instruction, documentId: id })} />
                </div>}
            <Main steps={devData} keyNotes={devKeyNotes} />
        </>
    )
}
export default Developers