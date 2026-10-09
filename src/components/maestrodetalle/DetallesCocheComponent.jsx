import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';

export default class DetallesCocheComponent extends Component {

    state = {
        coche: null
    }

    loadCoches = () => {
        let id = this.props.idCoche;
        let request = "api/coches/findcoche/" + id;

        axios.get(Global.urlApiCoches + request).then((response) => {
            this.setState({
                coche: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadCoches();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idCoche != this.props.idCoche) {
            this.loadCoches();
        }
    }

    render() {
        return (
            <div>
                <h1>Detalles</h1>

                {
                    this.state.coche && (
                        <ul>
                            <li>Marca: {this.state.coche.marca}</li>
                            <li>Modelo: {this.state.coche.modelo}</li>
                            <li>Conductor: {this.state.coche.conductor}</li>
                            <li><img src={this.state.coche.imagen} width="200px"/></li>
                        </ul>
                    )
                }

            </div>
        )
    }
}
