import { useEffect, useReducer } from 'react';

export interface Imonster {
    name: string;
    attack: number;
    defense: number;
    speed: number;
    hp: number;
    type: 'spider' | 'gnome' | 'golem' | 'skeleton';
}

const MONSTER_DB_KEY = 'monsters_list';

function loadFromStorage(): Imonster[] {
    try {
        const data = localStorage.getItem(MONSTER_DB_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveToStorage(monsters: Imonster[]) {
    localStorage.setItem(MONSTER_DB_KEY, JSON.stringify(monsters));
}

type MonsterAction =
    | { type: 'LOAD'; payload: Imonster[] }
    | { type: 'ADD'; payload: Imonster }
    | { type: 'SET'; payload: Imonster[] };

function monsterReducer(state: Imonster[], action: MonsterAction): Imonster[] {
    switch (action.type) {
        case 'LOAD':
            return action.payload;
        case 'ADD': {
            const updated = [...state, action.payload];
            saveToStorage(updated);
            return updated;
        }
        case 'SET': {
            saveToStorage(action.payload);
            return action.payload;
        }
        default:
            return state;
    }
}

export function useMonster() {
    const [monsters, dispatch] = useReducer(monsterReducer, []);

    useEffect(() => {
        const stored = loadFromStorage();
        if (stored.length === 0) {
            const seed: Imonster[] = [
                {
                    name: "exemple1",
                    attack: 10,
                    defense: 20,
                    speed: 25,
                    hp: 100,
                    type: 'spider'
                },
                {
                    name: "exemple2",
                    attack: 20,
                    defense: 30,
                    speed: 30,
                    hp: 150,
                    type: 'gnome'
                },
                {
                    name: "exemple3",
                    attack: 30,
                    defense: 40,
                    speed: 40,
                    hp: 200,
                    type: 'golem'
                }
            ]

            dispatch({ type: 'LOAD', payload: seed });

            return
        }

        dispatch({ type: 'LOAD', payload: stored });
    }, []);

    const createMonster = (monster: Imonster) => {
        dispatch({ type: 'ADD', payload: monster });
    };

    const getMonsters = (): Imonster[] => {
        const stored = loadFromStorage();
        dispatch({ type: 'SET', payload: stored });
        return stored;
    };

    return {
        monsters,
        createMonster,
        getMonsters,
    };
}
