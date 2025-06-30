import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '../../../components/button';
import { ImageType } from '../../../components/imageType';
import { Input } from '../../../components/input';
import * as St from '../styles';
import { TextError } from "../../../components/input/styles";
import type { Imonster } from "../../../hooks/useMonster";
import { Loading } from "../../../components/loading";

const schema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    attack: yup.number().positive().integer().required("Ataque deve ser maior que zero"),
    defense: yup.number().positive().integer().required("Defesa deve ser maior que zero"),
    speed: yup.number().positive().integer().required("Velocidade deve ser maior que zero"),
    hp: yup.number().positive().integer().required("Vida atual deve ser maior ou igual a zero"),
    type: yup.mixed().oneOf(["spider", "gnome", "golem", "skeleton"]).required("Tipo de criatura é obrigatório"),
}).required();

export const MonsterForm = ({ onSubmit, load }: { load: boolean, onSubmit: (monster: Imonster) => void }) => {
    const { watch, setValue, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submit = (data: yup.InferType<typeof schema>) => {
        onSubmit(data as Imonster)
    };

    const type = watch("type")

    return <St.form onSubmit={handleSubmit(submit)}>
        <Input
            label="Nome:"
            type="text"
            onChange={(data) => {
                setValue('name', data.target.value)
            }}
            error={errors.name?.message ?? ''}
        />
        <St.formLine>
            <Input
                label="Ataque:"
                type="number"
                onChange={(data) => {
                    setValue('attack', data.target.value)
                }}
                error={errors.attack?.message ?? ''}
            />
            <Input
                label="Defesa:"
                type="number"
                onChange={(data) => {
                    setValue('defense', data.target.value)
                }}
                error={errors.defense?.message ?? ''}
            />
        </St.formLine>
        <St.formLine>
            <Input
                label="Velocidade:"
                type="number"
                onChange={(data) => {
                    setValue('speed', data.target.value)
                }}
                error={errors.speed?.message ?? ''}
            />
            <Input
                label="Hp:"
                type="number"
                onChange={(data) => {
                    setValue('hp', data.target.value)
                }}
                error={errors.hp?.message ?? ''}
            />
        </St.formLine>
        <St.monsterLine>
            <ImageType
                active={type == "spider"}
                type="spider"
                onClick={() => {
                    setValue('type', 'spider')
                }}
            />
            <ImageType
                active={type == "gnome"}
                type="gnome"
                onClick={() => {
                    setValue('type', 'gnome')
                }}
            />
            <ImageType
                active={type == "golem"}
                type="golem"
                onClick={() => {
                    setValue('type', 'golem')
                }}
            />
            <ImageType
                active={type == "skeleton"}
                type="skeleton"
                onClick={() => {
                    setValue('type', 'skeleton')
                }}
            />
        </St.monsterLine>
        {
            errors.type?.message && <TextError>{errors.type?.message}</TextError>
        }
        {
            load
                ? <Loading />
                : <Button
                    label="Salvar monstro"
                    onClick={() => { }}
                />
        }
    </St.form>
}