import { Link } from "react-router-dom" // npm i react-router-dom

export default function Sobre() {
    return (
        <>
            <h1>Sobre</h1>
            <div>
                Desenvolvido por Moisés Jefferson Santos Silva Araujo, aluno do terceiro semestre de Redes de computadores.
            </div>
            <Link to="/">Página Inicial</Link>
        </>
    )
}