import { LoaderCircleIcon } from "lucide-react"

const Button = ({ isPending, text, ...props }) => {
    return (
        <button
            {...props}
            disabled={isPending}
            className="py-3 text-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-Druk-Bold my-5 w-full border-2 text-2xl tracking-wide  disabled:hover:bg-transparent hover:bg-sky-400 transition-colors duration-500 flex justify-center">
            {isPending ? <LoaderCircleIcon className="animate-spin w-8 h-8 " /> : text}
        </button>
    )
}
export default Button