import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>APRESENTAÇÃO</h1>
            <p>Este projeto tem como objetivo de mostrar um site com 4 páginas, são elas: home, sobre, contato e taferas.</p>
            <hr />
          
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/tarefas">Tarefas</Link>
        </div>
    )
}