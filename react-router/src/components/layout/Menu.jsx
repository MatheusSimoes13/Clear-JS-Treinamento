import React from "react"
import './Menu.css'
import { Link } from "react-router-dom"

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/param/:id">Param</Link>
                </li>
                <li>
                    <Link to="/about">Início</Link>
                </li>
                <li>
                    <Link to="*">NotFound</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu