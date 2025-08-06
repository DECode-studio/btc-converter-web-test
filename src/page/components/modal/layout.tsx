import { Cancel01Icon } from "hugeicons-react"
import type { ReactNode } from "react"

type Props = {
    width?: string
    onClose: () => void
    children: ReactNode
}

const ModalLayout = ({
    width = 'max-w-md',
    onClose,
    children
}: Props) => {
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className={`relative p-4 w-full ${width} max-h-full`}>
                    <div className="relative bg-white rounded-3xl shadow-sm dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-0 right-0 m-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={onClose}
                        >
                            <Cancel01Icon className="w-5 h-5" />
                            <span className="sr-only">Close modal</span>
                        </button>

                        <div className="flex flex-col gap-7 items-center justify-center text-center p-6">
                            {children}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ModalLayout