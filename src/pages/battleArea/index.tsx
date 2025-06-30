import { useLocation, useNavigate } from 'react-router';

import { LifeBar } from '../../components/lifeBar';
import { Log } from '../../components/log';
import { MonsterCard } from '../../components/mosterCard';
import { Modal } from '../../components/modal';
import { Button } from '../../components/button';

import * as St from './styles';

import type { BattleResult } from '../../hooks/useBattle';

import { useBattleRunner } from '../../hooks/useBattleRunner';

export const BattleArea = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const battleResult = location.state as BattleResult | undefined;

    const {
        logs,
        life,
        hitMonster,
        battleEnded,
        restart
    } = useBattleRunner(battleResult);

    const handleBackToMenu = () => {
        navigate("/");
    };

    const monsterA = battleResult?.monsterA;
    const monsterB = battleResult?.monsterB;

    return <St.container>
        <St.battleArena>
            <St.header>
                <LifeBar
                    life={life.firstMonster}
                    name={monsterA?.name ?? "gnome"}
                    side="left"
                />
                <LifeBar
                    life={life.secondMonster}
                    name={monsterB?.name ?? "gnome"}
                    side="right"
                />
            </St.header>
            <St.competitors>
                <MonsterCard
                    type={monsterA?.type ?? "gnome"}
                    name={monsterA?.name ?? "gnome"}
                    attack={monsterA?.attack ?? 0}
                    defense={monsterA?.defense ?? 0}
                    speed={monsterA?.speed ?? 0}
                    hp={monsterA?.hp ?? 0}
                    isHit={hitMonster === 'monsterA'}
                />
                <St.VS>
                    VS
                </St.VS>
                <MonsterCard
                    type={monsterB?.type ?? "gnome"}
                    name={monsterB?.name ?? "gnome"}
                    attack={monsterB?.attack ?? 0}
                    defense={monsterB?.defense ?? 0}
                    speed={monsterB?.speed ?? 0}
                    hp={monsterB?.hp ?? 0}
                    isHit={hitMonster === 'monsterB'}
                />
            </St.competitors>
            <St.log>
                <Log logs={logs} />
            </St.log>
        </St.battleArena>
        <Modal title='Vitoria' open={battleEnded} hideClose={true} size='lg'>
            <St.modalContent>
                <>
                    <St.winner>
                        {battleResult?.winner}
                    </St.winner>
                    <Button
                        label='Reiniciar a batalha'
                        onClick={restart}
                    />
                    <Button
                        label='Voltar para o menu'
                        onClick={handleBackToMenu}
                    />
                </>
            </St.modalContent>
        </Modal>
    </St.container>
}