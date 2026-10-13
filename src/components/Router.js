import { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import HomeComponent from './HomeComponent';
import TablaMultiplicar from './TablaMultiplicar';
import NotFoundComponent from './NotFoundComponent';
import CollatzComponent from './CollatzComponent';
import MenuComponent from './MenuComponent';

export default class AppRouter extends Component {
    render() {
        function TablaMultiplicarElement() {
            //ESTA FUNCIÓN SERÁ PARA CAPTURAR LOS PARÁMETROS DE PATH
            //Y ENVIARLOS AL COMPONENT MEDIANTE PROPS
            let {minumero} = useParams();

            //DEVOLVEMOS EL COMPONENT CON PROPS
            return(
                <TablaMultiplicar numero = {minumero}/>
            )
        }

        function CollatzComponentElement() {
            let {numero} = useParams();

            return(
                <CollatzComponent numero = {numero}/>
            )
        }

        return (
            <BrowserRouter>
                <MenuComponent/>
                <Routes>
                    <Route
                        path="/"
                        element={<HomeComponent />}
                    />

                    <Route
                        path="/tabla/:minumero"
                        element={<TablaMultiplicarElement/>}
                    />

                    <Route
                        path="/collatz/:numero"
                        element={<CollatzComponentElement/>}
                    />

                    {/* Ruta 404: siempre al final */}
                    <Route
                        path="*"
                        element={<NotFoundComponent />}
                    />
                </Routes>
            </BrowserRouter>
        );
    }
}