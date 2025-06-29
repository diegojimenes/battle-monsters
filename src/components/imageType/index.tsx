import * as St from "./styles"
import skeleton from '../../assets/monsters/esquelto-card.png';
import gnome from '../../assets/monsters/gnome-card.png';
import spider from '../../assets/monsters/arranha-card.png';
import golem from '../../assets/monsters/golem-card.png';
export const ImageType = ({
    onClick,
    type,
    active
}: {
    type: "spider" | "gnome" | "golem" | "skeleton",
    active: boolean,
    onClick: () => void
}) => {
    const image = {
        spider,
        gnome,
        golem,
        skeleton
    }
    return <St.imageContainer onClick={onClick} active={active}>
        <St.photo src={image[type]} />
    </St.imageContainer>
}