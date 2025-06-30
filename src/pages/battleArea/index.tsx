import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { LifeBar } from '../../components/lifeBar';
import { Log } from '../../components/log';
import { MonsterCard } from '../../components/mosterCard';
import { Modal } from '../../components/modal';
import { Button } from '../../components/button';

import * as St from './styles';

import type { BattleResult } from '../../hooks/useBattle';

import attackSoundSrc from '../../assets/sounds/hit.wav';
import punchSoundSrc from '../../assets/sounds/punch.mp3';
import punch2SoundSrc from '../../assets/sounds/punch2.wav';
import victorySoundSrc from '../../assets/sounds/victory.mp3';

export const BattleArea = () => {
    const [isOpen, setOpen] = useState(false)

    const [hitMonster, setHitMonster] = useState<'monsterA' | 'monsterB' | null>(null);

    const [life, setLife] = useState<{ firstMonster: string; secondMonster: string }>({
        firstMonster: "100%",
        secondMonster: "100%",
    })

    const [logs, setLogs] = useState<string[]>([])

    const location = useLocation();
    const navigate = useNavigate();

    const isCancelled = useRef(false);

    const sounds = [
        new Audio(attackSoundSrc),
        new Audio(punchSoundSrc),
        new Audio(punch2SoundSrc)
    ];


    const battleResult = location.state as BattleResult | undefined;

    function wait(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const runBattle = async () => {
        if (!battleResult) return;

        const victorySound = new Audio(victorySoundSrc)

        for (const value of battleResult.log) {
            if (isCancelled.current) return;

            setLogs(prevLogs => [
                ...prevLogs,
                `Round ${value.round}: ${value.attacker} ataca ${value.defender} causando ${value.damage}`
            ]);

            const index = Math.floor(Math.random() * sounds.length);
            sounds[index].currentTime = 0;
            sounds[index].volume = 0.5;
            sounds[index].play();


            setHitMonster(value.defender === monsterA?.name ? 'monsterA' : 'monsterB');
            setLife({
                firstMonster: `${(value.hpStatus.monsterA / (monsterA?.hp || 1)) * 100}%`,
                secondMonster: `${(value.hpStatus.monsterB / (monsterB?.hp || 1)) * 100}%`
            });

            setTimeout(() => {
                setHitMonster(null);
            }, 400);

            await wait(1000);
        }

        if (isCancelled.current) return;

        victorySound.currentTime = 0;
        victorySound.volume = 0.5;
        victorySound.play();
        setOpen(true);
    };

    const handleRestart = () => {
        setLife({ firstMonster: "100%", secondMonster: "100%" });
        setLogs([])
        setOpen(false);
        runBattle();
    };

    const handleBackToMenu = () => {
        navigate("/");
    };


    useEffect(() => {
        if (!battleResult) {
            navigate("/");
            return;
        }

        isCancelled.current = false;
        runBattle();

        return () => {
            isCancelled.current = true;
        };
    }, [battleResult])

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
        <Modal title='Vitoria' open={isOpen} hideClose={true} size='lg' onClose={() => setOpen(false)}>
            <St.modalContent>
                <>
                    <St.winner>
                        {battleResult?.winner}
                    </St.winner>
                    <Button
                        label='Reiniciar a batalha'
                        onClick={handleRestart}
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