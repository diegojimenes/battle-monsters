import { useCallback, useEffect, useRef, useState } from 'react';
import type { BattleResult } from './useBattle';

import attackSoundSrc from '../assets/sounds/hit.wav';
import punchSoundSrc from '../assets/sounds/punch.mp3';
import punch2SoundSrc from '../assets/sounds/punch2.wav';
import victorySoundSrc from '../assets/sounds/victory.mp3';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function useBattleRunner(battleResult?: BattleResult) {
    const [logs, setLogs] = useState<string[]>([]);
    const [life, setLife] = useState({
        firstMonster: '100%',
        secondMonster: '100%'
    });
    const [hitMonster, setHitMonster] = useState<'monsterA' | 'monsterB' | null>(null);
    const [battleEnded, setBattleEnded] = useState(false);

    const isCancelled = useRef(false);

    const sounds = useRef([
        new Audio(attackSoundSrc),
        new Audio(punchSoundSrc),
        new Audio(punch2SoundSrc)
    ]);
    const victorySound = new Audio(victorySoundSrc);

    const monsterA = battleResult?.monsterA;
    const monsterB = battleResult?.monsterB;

    const runBattle = useCallback(async () => {
        if (!battleResult) return;

        setLogs([]);
        setBattleEnded(false);

        const logs = [];

        for (const value of battleResult.log) {
            if (isCancelled.current) return;

            logs.push(`Round ${value.round}: ${value.attacker} ataca ${value.defender} causando ${value.damage}`)

            setLogs(logs);

            const index = Math.floor(Math.random() * sounds.current.length);
            const sound = sounds.current[index];
            sound.currentTime = 0;
            sound.volume = 0.5;
            sound.play();

            setHitMonster(value.defender === monsterA?.name ? 'monsterA' : 'monsterB');

            setLife({
                firstMonster: `${(value.hpStatus.monsterA / (monsterA?.hp || 1)) * 100}%`,
                secondMonster: `${(value.hpStatus.monsterB / (monsterB?.hp || 1)) * 100}%`
            });

            setTimeout(() => setHitMonster(null), 400);
            await wait(1000);
        }

        if (isCancelled.current) return;

        victorySound.currentTime = 0;
        victorySound.volume = 0.5;
        victorySound.play();
        setBattleEnded(true);
    }, [battleResult, monsterA?.hp, monsterB?.hp, monsterA?.name, monsterB?.name]);

    useEffect(() => {
        if (!battleResult) return;

        isCancelled.current = false;
        runBattle();

        return () => {
            isCancelled.current = true;
        };
    }, [runBattle, battleResult]);

    return {
        logs,
        life,
        hitMonster,
        battleEnded,
        restart: runBattle
    };
}