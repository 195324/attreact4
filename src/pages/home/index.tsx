import { Link } from "react-router-dom"
import ButtonFatec from "../../components/buttonfatec/ButtonFatec"
import InputFatec from "../../components/inputFatec"

export default function Home() {
    return (
        <div>
            <p>Olá Mundo!</p>
            <hr />
            <InputFatec
                placeHolder="Digite seu nome"
                defaultValue="" type="text" /><br />
            <InputFatec
                placeHolder="Digite seu email"
                defaultValue="" type="email" /><br />
            <InputFatec
                placeHolder="Digite seu telefone"
                defaultValue="" type="text" /><br />
            <ButtonFatec label="Botão 2" type="button" />
            <hr />
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/tarefas">Tarefas</Link>
        </div>
    )
}