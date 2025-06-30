import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '../../components/button';
import { Modal } from '../../components/modal';
import { MonsterCard } from '../../components/mosterCard';

import { useMonster, type Imonster } from '../../hooks/useMonster';

import { MonsterForm } from './form';

import * as St from './styles';

export const List = () => {
    const [isOpen, setOpen] = useState(false)
    const [load, setLoad] = useState(false)
    const navigate = useNavigate();
    const { monsters, createMonster } = useMonster();

    const handleSubmit = (data: Imonster) => {
        setLoad(true)
        createMonster(data)

        setTimeout(() => {
            setLoad(false)
            setOpen(false)
        }, 500)
    }

    const handleBack = () => navigate("/")
    const handleCreateMonster = () => setOpen(true)
    const handleCloseMonsterModal = () => setOpen(false)

    return <St.container>
        <St.header>
            <St.buttonWrapper>
                <Button
                    label='Voltar'
                    onClick={handleBack}
                />
            </St.buttonWrapper>
            <St.title>
                Lista de Monstros
            </St.title>
            <St.buttonWrapper>
                <Button
                    label='Criar novo monstro'
                    onClick={handleCreateMonster}
                />
            </St.buttonWrapper>
        </St.header>
        <St.list>
            {monsters.length === 0 && (
                <St.empty>Nenhum monstro cadastrado!</St.empty>
            )}
            {
                monsters.map(({ name, attack, defense, speed, hp, type }) => {
                    return <MonsterCard
                        key={name}
                        type={type}
                        name={name}
                        attack={attack}
                        defense={defense}
                        speed={speed}
                        hp={hp}
                    />
                })
            }
        </St.list>
        <Modal title='Novo Monstro' open={isOpen} size='lg' onClose={handleCloseMonsterModal}>
            <St.modalContent>
                <MonsterForm onSubmit={handleSubmit} load={load} />
            </St.modalContent>
        </Modal>
    </St.container>
}