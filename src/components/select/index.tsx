import * as St from "./styles"

export const Select = ({
    options,
    label,
    onChange
}: {
    options: string[],
    label: string
    onChange: (data: any) => void
}) => {
    return <St.container
        onChange={onChange}
    >
        <St.option key={`op1`}>{label}</St.option>
        {options?.map((option) => {
            return <St.option key={option.replaceAll(' ', '')}>{option}</St.option>
        })}

    </St.container>
}