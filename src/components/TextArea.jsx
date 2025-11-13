import { useRef } from "react";

const TextArea = ({ ...props }) => {
    const textareaRef = useRef(null);

    const handleInput = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    return (
        <textarea
            {...props}
            ref={textareaRef}
            onInput={handleInput}
            placeholder="Type here... (max height: 200px)"
            className="w-full px-4 py-3  border-2 resize-none overflow-auto"
            style={{ minHeight: '60px', maxHeight: '200px' }}
        />
    )
}
export default TextArea