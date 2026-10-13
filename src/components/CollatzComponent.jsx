import React, { Component } from 'react'

export default class CollatzComponent extends Component {

    state = {
        collatz: []
    }

    generarCollatz = () => {
        let aux = [];
        let numero = parseInt(this.props.numero);

        while (numero != 1) {
            if(numero % 2 == 0) {
                //PAR
                numero = numero / 2;
            }else {
                //IMPAR
                numero = numero * 3 + 1;
            }
            //ESTE NÚMERO LO ALMACENAMOS EN EL ARRAY
            aux.push(numero);
        }

        this.setState({
            collatz: aux
        })
    }
    
    componentDidMount = () => {
        this.generarCollatz();
    }

    componentDidUpdate = (oldprops) => {
        if(oldprops.numero != this.props.numero) {
            this.generarCollatz();
        }
    }

    render() {
        return (
            <div>
                <h1>Collatz Component</h1>
                
                <h3 style={{color: "blue"}}>Numero: {this.props.numero}</h3>
                <ul>
                    {
                        this.state.collatz.map((num, index) => {
                            return(
                                <li key={index}>
                                    {num}
                                </li>
                            )
                        })
                        
                    }
                </ul>

            </div>
        )
    }
}
