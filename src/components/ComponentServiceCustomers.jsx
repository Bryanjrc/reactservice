import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';

export default class  extends Component {

    state = {
        customers: []
    }
    //url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";
    
    loadCustomers = () => {
        console.log("Antes del servicio");

        let request = "Suppliers";

        axios.get(Global.urlNorthwind + request).then((response) => {
            console.log("Leyendo servicio");
            //LOS DATOS DEL SERVICIO CON AXIOS SIEMPRE VIENEN
            //DENTRO DE LA PROPIEDAD data.
            this.setState({
                customers: response.data.value
            })

        })
        console.log("Después del servicio");
    }

    componentDidMount = () => {
        this.loadCustomers();
    }

    render() {
        return (
            <div>
                <h1>Service Api Customers</h1>

                <button onClick={ () => this.loadCustomers() }>
                    Load customers
                </button>

                {
                    this.state.customers.map((cliente, index) => {
                        return(
                            <h4 key={index} style={{color: "blue"}}>
                                Contacto: {cliente.ContactName},
                                Título: {cliente.ContactTitle}
                            </h4>
                        )
                    })
                }
            </div>
        )
    }
}

