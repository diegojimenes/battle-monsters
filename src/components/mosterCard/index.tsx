import * as St from "./styles"
import skeleton from '../../assets/monsters/esquelto-card.png';
import gnome from '../../assets/monsters/gnome-card.png';
import spider from '../../assets/monsters/arranha-card.png';
import golem from '../../assets/monsters/golem-card.png';
import type { Imonster } from "../../hooks/useMonster";
// import { Button } from "../button";
export const MonsterCard = ({
    name,
    attack,
    defense,
    speed,
    hp,
    type,
    isHit = false
}: Imonster & { isHit?: boolean }) => {

    const image = {
        spider,
        gnome,
        golem,
        skeleton
    }

    return <>
        <St.container className="monsterCard" isHit={isHit}>
            <St.imageContainer>
                <St.photo src={image[type]} />
            </St.imageContainer>
            <St.name>
                {name}
            </St.name>
            <St.statsList>
                <St.stats>
                    <St.statsText>
                        attack - {attack}
                    </St.statsText>
                    <St.statsText>
                        defense - {defense}
                    </St.statsText>
                </St.stats>
                <St.stats>
                    <St.statsText>
                        speed - {speed}
                    </St.statsText>
                    <St.statsText>
                        hp - {hp}
                    </St.statsText>
                </St.stats>
            </St.statsList>
        </St.container>
        {/* <St.actionWraper>
            <Button label="excluir" onClick={() => { }} />
            <Button label="editar" onClick={() => { }} />
        </St.actionWraper> */}
    </>
}