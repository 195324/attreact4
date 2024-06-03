import { Link } from "react-router-dom";
import InputFatec from "../../components/inputFatec";
import ButtonFatec from "../../components/buttonfatec/ButtonFatec";

export default function Contato(){
    return(
        <>
        <h1>Formulário</h1>
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
            
        <Link to='/'>Página Inicial</Link>
        </>
    ) 
}