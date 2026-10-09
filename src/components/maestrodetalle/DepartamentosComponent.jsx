import React, { Component } from 'react'
import react from 'react'
import Global from '../../Global'
import axios from 'axios';
import EmpleadosComponent from './EmpleadosComponent';

export default class DepartamentosComponent extends Component {

    urlDepartamentos = Global.urlApiDepartamentos;
    selectIdDepartamento = React.createRef();

    state = {
        departamentos: [],
        idDepartamento: 0
    }

    loadDepartamentos = () => {
        let request = "webresources/departamentos";
        
        axios.get(this.urlDepartamentos + request).then((response) => {
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    buscarEmpleados = (event) => {
        event.preventDefault();

        let id = this.selectIdDepartamento.current.value;

        this.setState({
            idDepartamento: id
        })
    }

    render() {
        return (
            <div>
                <h1>Departamentos Component</h1>

                <form>
                    <label>Selecciones departamento: </label>

                    <select ref={this.selectIdDepartamento}>
                        {
                            this.state.departamentos.map((dept, index) => {
                                return(
                                    <option key={index} value={dept.numero}>
                                        {dept.nombre}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <button onClick={this.buscarEmpleados}>Buscar empleados</button>
                </form>

                {
                    this.state.idDepartamento != 0 &&
                        (<EmpleadosComponent idDepartamento = {this.state.idDepartamento} />)
                }

            </div>
        )
    }
}
