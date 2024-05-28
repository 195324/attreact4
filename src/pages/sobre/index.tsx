import { Link } from "react-router-dom" // npm i react-router-dom

export default function Sobre() {
    return (
        <>
            <h1>Sobre</h1>
            <div>
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Numquam ut aliquid at vero eius
                et ab, doloremque voluptate, dolore
                cumque assumenda iure asperiores
                voluptatum pariatur qui illo,
                hic dignissimos reprehenderit.
            </div>
            <Link to="/">Voltar para Home</Link>
        </>
    )
}