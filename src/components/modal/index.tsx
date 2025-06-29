
import type { JSX } from "react";
import * as St from "./styles"

export const Modal = ({
    open,
    title,
    onClose,
    size,
    hideClose,
    children = <></>
}: {
    title: string,
    open: Boolean,
    size: "mid" | "lg"
    onClose: () => void,
    children: JSX.Element,
    hideClose?: boolean
}) => {

    if (!open) {
        return null;
    }

    return <St.modalContainer>
        <St.modal size={size}>
            <St.header>
                {
                    !hideClose && <St.close onClick={() => {
                        onClose()
                    }}>X</St.close>
                }
                <St.title>{title}</St.title>
            </St.header>
            <St.content>
                {children}
            </St.content>
        </St.modal>
    </St.modalContainer>
}