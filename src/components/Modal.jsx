import { XIcon } from "lucide-react"

const Modal = ({ isOpen, setIsOpen, modalRef, title, children }) => {
    return (
        < >
            {isOpen && (
                <div className="fixed inset-0 bg-black/50  flex items-center justify-center z-50">
                    <div
                        ref={modalRef}
                        className="bg-[#eceae9] relative shadow-xl p-7"
                    >
                        <h2 className="text-6xl pb-5">{title}</h2>
                        {children}
                        <XIcon onClick={() => setIsOpen(false)}
                            className=" cursor-pointer absolute top-0 right-0  w-6 h-6 m-1 text-red-500" />
                    </div>
                </div>
            )}
        </>
    )
}
export default Modal