import Main from "../../layout/Main"
import { useOutletContext, useParams } from "react-router"
import Button from "../../components/Button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import TextArea from "../../components/TextArea";
import { useState } from "react";
import RadioButton from "../../components/RadioButton";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Steps = () => {
  const { guideData, guideKeynotesData } = useOutletContext();
  const [data, setData] = useState(null)
  const [stepsSetter, setStepsSetter] = useState(null)
  const [documentType, setDocumentType] = useState(1)
  const [keyNotesSetter, setKeyNotesSetter] = useState(null)
  const [instruction, setInstruction] = useState(null)
  const { id } = useParams();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload) => axios.post(`${BASE_URL}/api/chat-completion`, payload),
    onSuccess: (response) => {
      const jsonText = response.data.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(jsonText);

      // Now extract the correct properties
      const steps = parsed.documentationSteps || [];
      const notes = parsed.keyNotes || [];

      setData({ steps, notes });

    },
  })

  const { mutate: addDocumentStep, isPending: pendingDocument, isSuccess } = useMutation({
    mutationFn: (payload) => axios.post(`${BASE_URL}/api/documentation-steps/multiple`, payload),
  })

  const handleSubmit = () => {
    const docuRequest = { documentationSteps: stepsSetter, KeyNotes: keyNotesSetter }
    if (stepsSetter) addDocumentStep(docuRequest);
  };

  const hasGuideData = guideData && guideData.length > 0;
  const hasGuideKeynotesData = guideKeynotesData && guideKeynotesData.length > 0;
  return <>
    {guideData.length > 0 || data?.steps.length > 0 ?
      <>
        <Main
          keyNotes={hasGuideKeynotesData ? guideKeynotesData : data?.notes}
          steps={hasGuideData ? guideData : data?.steps}
          setStepsSetter={setStepsSetter}
          setKeyNotesSetter={setKeyNotesSetter}
        />
        {data?.steps && !isSuccess && <Button onClick={handleSubmit} text="ADD DOCUMENTATION" isPending={pendingDocument} />}
      </>
      :
      <div className="max-w-3xl mx-auto px-6 pt-10 max-h-[300px] font-monument-grotesk-regular">
        <div className="flex gap-5 mb-5">
          <p className="text-2xl font-Druk-Medium tracking-wide ">Document Type</p>
          <RadioButton
            selectedValue={documentType}
            onChange={setDocumentType}
            text="User" value={1} />

          <RadioButton
            selectedValue={documentType}
            onChange={setDocumentType}
            text="Dev" value={2} />
        </div>
        <TextArea onChange={(e) => setInstruction(e.target.value)} />
        <Button text="GENERATE DOCUMENTATION" isPending={isPending} onClick={() => mutate({ instruction, documentId: id, documentType: documentType })} />
      </div>}
  </>
}
export default Steps