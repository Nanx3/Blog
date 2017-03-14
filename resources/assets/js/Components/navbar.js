/**
 * Created by Nanx3 on 12/3/2017.
 */

//Defaults to React
import   React from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './header';

//Material UI Componentes
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//Style of Material UI
import {
    cyan500, cyan700,
    pinkA200, blue500,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack, lightBlue600
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        pickerHeaderColor: lightBlue600,
    },
    datePicker: {
        selectColor: lightBlue600,
    },
    flatButton: {
        primaryTextColor: lightBlue600,
    },
    textField: {
        floatingLabelColor: lightBlue600,
        focusColor: lightBlue600,
    },
    tabs: {
        backgroundColor: lightBlue600,
    },
});


class NavbarComponent extends React.Component{
    constructor(props) {
        super(props);
        this.adaptHTML = this.adaptHTML.bind(this);
    }

    adaptHTML(){
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
              <div>
                  <Header/>
                  <div id="base">
                        <div className="offcanvas"></div>

                            {React.cloneElement(this.props.children)}

                        <div id="menubar" className="menubar-inverse ">
                                    <div className="menubar-fixed-panel">
                                        <div>
                                            <a className="btn btn-icon-toggle btn-default menubar-toggle" data-toggle="menubar" href="javascript:void(0);">
                                                <i className="fa fa-bars"></i>
                                            </a>
                                        </div>
                                        <div className="expanded">
                                            <a href="">
                                                <span className="text-lg text-bold text-primary ">Webforce HQ</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="menubar-scroll-panel">
                                         <ul id="main-menu" className="gui-controls">
                                            <li>
                                                <Link to={"admin/post"}>
                                                    <div className="gui-icon"><i className="md md-event-note"></i></div>
                                                    <span className="title">Posts</span>
                                                </Link>
                                            </li>
                                             <li>
                                                 <Link to={"admin/tag"}>
                                                     <div className="gui-icon"><i className="md md-local-offer"></i></div>
                                                     <span className="title">Tags</span>
                                                 </Link>
                                             </li>
                                         </ul>
                                        <div className="menubar-foot-panel">
                                            <small className="no-linebreak hidden-folded">
                                                 <span className="opacity-75">Copyright &copy; 2017</span><strong> WebForce HQ</strong>
                                            </small>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>

    );
    }

    render() {
        return(
            this.adaptHTML()
        );
    }
}
export default NavbarComponent;