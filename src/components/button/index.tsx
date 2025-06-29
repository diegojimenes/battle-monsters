import * as St from "./styles"

export const Button = ({ label, onClick }: { label: string, onClick: () => void }) => {
    return <St.container onClick={onClick}>
        {label}
    </St.container>
}