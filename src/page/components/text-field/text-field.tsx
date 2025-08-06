import {
    useRef,
    useState,
    type HTMLInputTypeAttribute,
    type ReactNode
} from "react"

type Props = {
    title: string
    value: string
    type?: HTMLInputTypeAttribute
    readonly?: boolean
    titleItem?: ReactNode
    prefix?: ReactNode
    suffix?: ReactNode
    titleStyle?: string
    textStyle?: string
    hintStyle?: string
    inputFormatter?: (value: string) => string
    onSubmit?: () => void
    onChange?: (value: string) => void
}

export const TitleTextField = ({
    title,
    value,
    titleItem,
    prefix,
    suffix,
    type = 'text',
    readonly = false,
    titleStyle = 'text-neutral-800 text-sm font-semibold',
    textStyle = 'text-neutral-800 text-sm font-semibold',
    hintStyle = 'placeholder-gray-500 placeholder-opacity-30',
    inputFormatter,
    onSubmit,
    onChange,
}: Props) => {
    return (
        <div className="flex flex-col space-y-2 w-full items-start">
            <span className={`${titleStyle} flex flex-row space-x-2`}>
                <span>{title}</span> {titleItem}
            </span>
            <TextField
                title={title}
                value={value}
                prefix={prefix}
                suffix={suffix}
                type={type}
                readonly={readonly}
                textStyle={textStyle}
                hintStyle={hintStyle}
                inputFormatter={inputFormatter}
                onSubmit={onSubmit}
                onChange={onChange}
            />
        </div>
    )
}

export const TextField = ({
    title,
    value,
    prefix,
    suffix,
    type = 'text',
    readonly = false,
    textStyle = 'text-neutral-800 text-sm font-semibold',
    hintStyle = 'placeholder-gray-500 placeholder-opacity-30',
    inputFormatter,
    onSubmit,
    onChange,
}: Props) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div
            ref={wrapperRef}
            className={`relative h-[50px] px-[20px] flex flex-row space-x-3 items-center justify-between w-full rounded-full border ${isFocused ? 'border-green-500' : 'border-white'
                }`}
        >
            {prefix}
            <input
                className={`flex-1 bg-transparent ${hintStyle} ${textStyle} w-full focus:outline-none`}
                type={type}
                readOnly={readonly}
                placeholder={title}
                value={inputFormatter ? inputFormatter(value) : value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => (onChange ? onChange(e.target.value) : {})}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && onSubmit) {
                        onSubmit();
                    }
                }}
            />
            {suffix && (
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 p-2 bg-white hover:bg-gray-200 rounded-xl aspect-square">
                    {suffix}
                </div>
            )}
        </div>
    );
};