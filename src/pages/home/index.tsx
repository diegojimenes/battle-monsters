import { useState } from 'react';
import { useNavigate } from 'react-router';

import logo from '../../assets/logo.png';

import { Button } from '../../components/button';
import { Modal } from '../../components/modal';
import { MonsterCard } from '../../components/mosterCard';
import { Select } from '../../components/select';
import { TextError } from '../../components/input/styles';

import { useMonster, type Imonster } from '../../hooks/useMonster';
import { useBattle } from '../../hooks/useBattle';

import * as St from './styles';
import { Loading } from '../../components/loading';

export const Home = () => {
    const [isOpenBattle, setOpenBattle] = useState(false)
    const [load, setLoad] = useState(false)
    const { monsters } = useMonster();

    const [error, setError] = useState(false)

    const [selectedMonsters, setSelectedMonsters] = useState<{
        firstMonster: Imonster;
        secondMonster: Imonster;
    }>({
        firstMonster: monsters[0],
        secondMonster: monsters[1]
    })

    const navigate = useNavigate();
    const { battle } = useBattle()

    const monsterList = monsters.map(({ name }) => {
        return name
    })

    const handleBattle = () => {
        if (selectedMonsters.firstMonster == undefined || selectedMonsters.secondMonster == undefined) {
            return setError(true)
        }
        setLoad(true)

        const log = battle({ ...selectedMonsters.firstMonster }, { ...selectedMonsters.secondMonster })

        setTimeout(() => {
            setLoad(false)
            setError(false)
            navigate("battle-area", { state: { ...log, monsterA: selectedMonsters.firstMonster, monsterB: selectedMonsters.secondMonster } })
        }, 500)

    }

    const handleSelectFirstMonster = (e: any) => {
        setSelectedMonsters({
            ...selectedMonsters,
            firstMonster: monsters[e.target.selectedIndex - 1]
        })
    }
    const handleSelectSecondMonster = (e: any) => {
        setSelectedMonsters({
            ...selectedMonsters,
            secondMonster: monsters[e.target.selectedIndex - 1]
        })
    }

    return <St.container>
        <St.logoWrapper>
            <St.logo src={logo} alt="Logo do jogo" />
        </St.logoWrapper>
        <St.buttonGroup>
            <Button label='Iniciar nova batalha' onClick={() => setOpenBattle(true)} />
            <Button label='Meus monstros' onClick={() => navigate("/list")} />
        </St.buttonGroup>

        <Modal title='Escolha seus monstos' open={isOpenBattle} size='lg' onClose={() => setOpenBattle(false)}>
            <St.modalContent>
                <St.monstersPanel>
                    <St.monster>
                        <Select
                            options={monsterList}
                            label="Selecione um monstro"
                            onChange={handleSelectFirstMonster}
                        />
                        <MonsterCard
                            type={selectedMonsters?.firstMonster?.type}
                            name={selectedMonsters?.firstMonster?.name}
                            attack={selectedMonsters?.firstMonster?.attack}
                            defense={selectedMonsters?.firstMonster?.defense}
                            speed={selectedMonsters?.firstMonster?.speed}
                            hp={selectedMonsters?.firstMonster?.hp}
                        />
                    </St.monster>
                    <St.VS>
                        VS
                    </St.VS>
                    <St.monster>
                        <Select
                            options={monsterList}
                            label="Selecione um monstro"
                            onChange={handleSelectSecondMonster}
                        />
                        <MonsterCard
                            type={selectedMonsters?.secondMonster?.type}
                            name={selectedMonsters?.secondMonster?.name}
                            attack={selectedMonsters?.secondMonster?.attack}
                            defense={selectedMonsters?.secondMonster?.defense}
                            speed={selectedMonsters?.secondMonster?.speed}
                            hp={selectedMonsters?.secondMonster?.hp}
                        />
                    </St.monster>
                </St.monstersPanel>
                {
                    error && <St.Error>
                        <TextError>Selecione seus monstros</TextError>
                    </St.Error>
                }
                {
                    load
                        ? <Loading />
                        : <Button
                            label='Iniciar batalha'
                            onClick={handleBattle}
                        />
                }

            </St.modalContent>
        </Modal>
    </St.container>
}