import type { ReactNode } from "react"

type Props = {
    title: string
    value: string
    titleItem?: ReactNode
    suffix?: ReactNode
    readonly?: boolean
    inputFormatter?: (value: string) => string
    onSubmit?: () => void
    onChange?: (value: string) => void
}

export const TitleTextArea = ({
    title,
    value,
    titleItem,
    suffix,
    readonly = false,
    inputFormatter,
    onSubmit,
    onChange,
}: Props) => {
    return (
        <label className="flex flex-col space-y-2 w-full items-start">
            <span className="text-neutral-800 text-sm font-ibmSemiBold flex flex-row space-x-2">
                <span>{title}</span> {titleItem}
            </span>
            <TextArea
                title={title}
                value={value}
                suffix={suffix}
                readonly={readonly}
                inputFormatter={inputFormatter}
                onSubmit={onSubmit}
                onChange={onChange}
            />
        </label>
    )
}

export const TextArea = ({
    title,
    value,
    suffix,
    readonly = false,
    inputFormatter,
    onSubmit,
    onChange,
}: Props) => {

    return (
        <div className="relative flex flex-row space-x-5 items-center justify-between w-full">
            <textarea
                className="flex-1 text-left h-[100px] p-[20px] bg-transparent placeholder-gray-500 placeholder-opacity-30 rounded-2xl border"
                readOnly={readonly}
                placeholder={title}
                value={inputFormatter ? inputFormatter(value) : value}
                onChange={(e) => onChange ? onChange(e.target.value) : {}}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && onSubmit) {
                        onSubmit()
                    }
                }}
            />
            {
                suffix && (
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 p-2 bg-white hover:bg-gray-200 rounded-xl aspect-square">
                        {suffix}
                    </div>
                )
            }
        </div>
    )
}