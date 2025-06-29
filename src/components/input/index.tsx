import * as St from "./styles"

export const Input = ({
    label,
    type,
    error,
    onChange
}: {
    label: string,
    type: "text" | "number"
    error: string,
    onChange: (data: any) => void
}) => {
    return <St.container>
        <St.input
            placeholder={label}
            onChange={onChange}
            type={type}
        />
        {
            error && <St.TextError>{error}</St.TextError>
        }
    </St.container>
}