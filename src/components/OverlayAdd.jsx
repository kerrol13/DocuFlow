import Modal from "./Modal"
import useClickOutside from "../hooks/useClickOutside";
import { useState } from "react";
import Button from "./Button";

const OverlayAdd = ({ isOpen, setIsOpen, modalRef, title, action }) => {
    const [name, setName] = useState(null)
    useClickOutside(modalRef, setIsOpen, isOpen)

    return (
        <Modal isOpen={isOpen} modalRef={modalRef} setIsOpen={setIsOpen} title={title}>
            <div className="flex flex-col items-start gap-3">
                <input onChange={(e) => setName(e.target.value)} required placeholder="Enter a title for your document" className="uppercase w-[350px] py-3 px-4 border-2 text-xl font-monument-grotesk-regular"></input>
                <Button onClick={() => action({ name })} text="ADD DOCUMENTATION" />
            </div>
        </Modal>
    )
}
export default OverlayAdd