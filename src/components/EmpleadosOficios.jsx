import axios from 'axios'
import react, { Component } from 'react'
import Global from '../Global'

export default class EmpleadosOficios extends Component {

    selectOficio = react.createRef();
    urlEmpleados = Global.urlApiEmpleados;

    buscarEmpleados = (event) => {
        event.preventDefault();

        let oficio = this.selectOficio.current.value;
        let request = "api/empleados/empleadosoficio/" + oficio;

        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Leyendo empleados");

            this.setState({
                empleados: response.data
            });
        });
    }

    loadOficios = () => {
        let request = "api/empleados";

        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Leyendo oficios");

            let aux = [...new Set(
                response.data.map(elem => elem.oficio)
            )];

            this.setState({
                oficios: aux
            });
        });
    }

    componentDidMount = () => {
        this.loadOficios();
    }

    state = {
        empleados: [],
        oficios: []
    }

    render() {
        return (
            <div>
                <h1>Empleados Oficios</h1>

                <form onSubmit={this.buscarEmpleados}>
                    <label>Seleccione un oficio: </label>

                    <select ref={this.selectOficio}>
                        {
                            this.state.oficios.map((oficio, index) => {
                                return (
                                    <option key={index} value={oficio}>
                                        {oficio}
                                    </option>
                                )
                            })
                        }
                    </select>

                    <button type="submit">
                        Buscar empleados
                    </button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.empleados.map((emp, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{emp.apellido}</td>
                                        <td>{emp.oficio}</td>
                                        <td>{emp.salario}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}