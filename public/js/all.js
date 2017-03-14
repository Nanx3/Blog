// ES6 transpiler babel

//Librerias
import   React from 'react';
import   ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory,hashHistory,IndexRoute } from 'react-router';

//Componentes
import  Perfil from './Clientes/perfil';
import  Dashboard from './Clientes/dashboard';
import  Proyectos from './Clientes/proyectos';
import  Contratos from './Clientes/contratos';
import  OrdenesCompra from './Clientes/ordenescompra';
import  Pagos from './Clientes/pagos';
import  Servicios from './Clientes/servicios';
import  Bitacora from './Clientes/bitacoras';
import  Layout from './Componentes/layoutCliente';
import  Notificaciones from './Clientes/Notificaciones';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
                <IndexRoute component={Dashboard} />
                <Route path="dashboard" component={Dashboard}/>
                <Route path="proyectos" component={Proyectos}/>
                <Route path="contratos" component={Contratos}/>
                <Route path="ordenescompra" component={OrdenesCompra}/>
                <Route path="pagos" component={Pagos}/>
                <Route path="servicios" component={Servicios}/>
                <Route path="perfil" component={Perfil}/>
                <Route path="bitacoras" component={Bitacora}/>
                <Route path="notificaciones" component={Notificaciones}/>
        </Route>
    </Router>
), document.getElementById('dashboard_cliente'));

// ES6 transpiler babel

//Librerias
import   React from 'react';
import   ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory,hashHistory,IndexRoute } from 'react-router';

//Componentes
import  Dashboard from './Paginas/dashboard';
import  Proyectos from './Paginas/proyectos';
import  Clientes from './Paginas/clientes';
import  Contratos from './Paginas/contratos';
import  Administracion_cuentas from './Paginas/administracion_cuentas';
import  OrdenesCompra from './Paginas/ordenescompra';
import  Pagos from './Paginas/pagos';
import  Servicios from './Paginas/servicios';
import  Perfil from './Paginas/perfil';
import  Bitacora from './Paginas/bitacoras';
import  Layout from './Componentes/layoutAdministrador'
import  Notificaciones from './Paginas/Notificaciones'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
                <IndexRoute component={Dashboard} />
                <Route path="dashboard" component={Dashboard}/>
                <Route path="administradores_cuentas" component={Administracion_cuentas}/>
                <Route path="proyectos" component={Proyectos}/>
                <Route path="clientes" component={Clientes}/>
                <Route path="contratos" component={Contratos}/>
                <Route path="ordenescompra" component={OrdenesCompra}/>
                <Route path="pagos" component={Pagos}/>
                <Route path="servicios" component={Servicios}/>
                <Route path="perfil" component={Perfil}/>
                <Route path="bitacoras" component={Bitacora}/>
                <Route path="notificaciones" component={Notificaciones}/>
        </Route>
    </Router>
), document.getElementById('dashboard_administrador'));

//# sourceMappingURL=all.js.map
