import axios from 'axios';
import React, { Component } from 'react'

export default class ComponentServiceSuppliers extends Component {
    
    cajaID = React.createRef();
    cajaNombre = React.createRef();

    buscarDatos = (event) => {
        event.preventDefault();

        let id = parseInt(this.cajaID.current.value);
        let nombre = this.cajaNombre.current.value;
    }
    
    state = {
        suppliers: []
    }
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers";
    
    loadSuppliers = () => {
        console.log("Antes del servicio");
        axios.get(this.url).then((response) => {
            console.log("Leyendo servicio");
            //LOS DATOS DEL SERVICIO CON AXIOS SIEMPRE VIENEN
            //DENTRO DE LA PROPIEDAD data.
            this.setState({
                suppliers: response.data.value
            })

        })
        console.log("Después del servicio");
    }

    componentDidMount = () => {
        this.loadSuppliers();
    }

    
    render() {
        return (
            <div>
                <h1>Service Api Suppliers</h1>
                
                <form>
                    <label>ID: </label>
                    <input type='number' ref={this.cajaID}>
                    </input>

                    <label>Nombre: </label>
                    <input type='text' ref={this.cajaNombre}></input>

                    <button onSubmit={this.buscarDatos}>
                        Mostrar datos
                    </button>
                </form>

                {
                    this.state.suppliers.map((proveedor, index) => {
                        return(
                            <h4 key={index} style={{color: "blue"}}>
                                ID: {proveedor.SupplierID},
                                Nombre: {proveedor.ContactName}
                            </h4>
                        )
                    })
                }
            </div>
        )
    }
}