import * as St from "./styles"

export const LifeBar = ({
    life,
    name,
    side
}: {
    life: string,
    name: string,
    side: "left" | "right"
}) => {
    return <St.container side={side}>
        <St.lifeBarWraper side={side}>
            <St.lifeBar life={life} />
        </St.lifeBarWraper>
        <St.name>
            {name}
        </St.name>
    </St.container>
}