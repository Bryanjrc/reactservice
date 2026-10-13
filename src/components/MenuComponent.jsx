import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/"> Home</NavLink>
                    </li>

                    <li>
                        <NavLink to ="/tabla/21"> Tabla multiplicar 21</NavLink>
                    </li>

                    <li>
                        <NavLink to ="/tabla/14"> Tabla multiplicar 14</NavLink>
                    </li>

                    <li>
                        <NavLink to ="/tabla/7"> Tabla multiplicar 7</NavLink>
                    </li>

                    <li>
                        <NavLink to ="/collatz/21"> Collatz 21</NavLink>
                    </li>

                    <li>
                        <NavLink to ="/collatz/14"> Collatz 14</NavLink>
                    </li>

                    <li>
                        <NavLink to ="/collatz/7"> Collatz 7</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
