import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'
import DetallesCocheComponent from './DetallesCocheComponent';

export default class CochesComponent extends Component {

    state = {
        coches: [],
        idCoche: 0
    }

    selectIdCoche = React.createRef();

    loadCoches = () => {
        let request = "api/coches/"

        axios.get(Global.urlApiCoches + request).then((response) => {
            this.setState({
                coches: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadCoches();
    }

    buscarCoche = (event) => {
        event.preventDefault();

        let id = this.selectIdCoche.current.value;

        this.setState({
            idCoche: id
        })
    }

    render() {
        return (
            <div>
                <h1>Coches Component</h1>

                <form>
                    <label>Marca: </label>

                    <select ref={this.selectIdCoche}>
                        {
                            this.state.coches.map((coche, index) => {
                                return(
                                    <option key={index} value={coche.idCoche}>
                                        {coche.marca}
                                    </option>
                                )
                            })
                        }
                    </select>

                    <button onClick={this.buscarCoche}>Buscar</button>
                </form>

                {
                    this.state.idCoche != 0 &&
                    (<DetallesCocheComponent idCoche = {this.state.idCoche} />)
                }
            </div>
        )
    }
}
