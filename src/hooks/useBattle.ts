import type { Imonster } from "./useMonster";

export type BattleLogItem = {
    round: number;
    attacker: string;
    defender: string;
    damage: number;
    defenderHp: number;
    hpStatus: {
        monsterA: number;
        monsterB: number;
    };
};

export type BattleLog = BattleLogItem[];

export type BattleResult = {
    winner: string;
    log: BattleLog;
    monsterA?: Imonster,
    monsterB?: Imonster,
};

export function useBattle() {
    function calculateDamage(attack: number, defense: number): number {
        const damage = attack - defense;
        return damage > 0 ? damage : 1;
    }

    function battle(monsterA: Imonster, monsterB: Imonster): BattleResult {

        const log: BattleLog = [];

        let first: Imonster, second: Imonster;

        if (monsterA.speed > monsterB.speed) {
            first = monsterA;
            second = monsterB;
        } else if (monsterB.speed > monsterA.speed) {
            first = monsterB;
            second = monsterA;
        } else {
            first = monsterA.attack >= monsterB.attack ? monsterA : monsterB;
            second = first === monsterA ? monsterB : monsterA;
        }

        let round = 1;
        while (monsterA.hp > 0 && monsterB.hp > 0) {

            const defender1 = first === monsterA ? monsterB : monsterA;
            const damage1 = calculateDamage(first.attack, defender1.defense);
            defender1.hp -= damage1;
            log.push({
                round,
                attacker: first.name,
                defender: defender1.name,
                damage: damage1,
                defenderHp: Math.max(defender1.hp, 0),
                hpStatus: {
                    monsterA: Math.max(monsterA.hp, 0),
                    monsterB: Math.max(monsterB.hp, 0),
                }
            });

            if (defender1.hp <= 0) break;

            const defender2 = second === monsterA ? monsterB : monsterA;
            const damage2 = calculateDamage(second.attack, defender2.defense);
            defender2.hp -= damage2;
            log.push({
                round,
                attacker: second.name,
                defender: defender2.name,
                damage: damage2,
                defenderHp: Math.max(defender2.hp, 0),
                hpStatus: {
                    monsterA: Math.max(monsterA.hp, 0),
                    monsterB: Math.max(monsterB.hp, 0),
                }
            });

            round++;
        }

        const winner = monsterA.hp > 0 ? monsterA.name : monsterB.name;

        return { winner, log };
    }

    return {
        battle
    };
}