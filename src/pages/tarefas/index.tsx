import { Link } from "react-router-dom";

export default function Tarefas(){
return (
    <>
    <h1>Lista de Atividades</h1>
        <p>
        <ul>
                <li>Atividade 1: Descrição da atividade 1</li>
                <li>Atividade 2: Descrição da atividade 2</li>
                <li>Atividade 3: Descrição da atividade 3</li>
                <li>Atividade 4: Descrição da atividade 4</li>
                <li>Atividade 5: Descrição da atividade 5</li>
         </ul>
         </p>
    

    <Link to="/">Página Inicial</Link>
    </>
    
)
}