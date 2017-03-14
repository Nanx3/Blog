/**
 * Created by Nanx3 on 12/3/2017.
 */

//Defaults
import React from 'react';
import { Router, Route, Link } from 'react-router';

//Notifications
import {NotificationCenter, NotificationCounter} from 'react-notification-center';

class HeaderComponent extends  React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            image:"img/logo-02.png"
        };
        this.adaptHTML = this.adaptHTML.bind(this);
        this.LoadUser = this.LoadUser.bind(this);
    }

    componentDidMount() {
        this.LoadUser();
    }

    LoadUser() {
        $.ajax({
            type: 'GET',
            url: 'admin/user',
            context: this,
            dataType: 'json',
            cache: false,
            success: function (data) {
                        this.setState({
                            name: data.name,
                            email: data.email
                        });

            }.bind(this),
            error: function (xhr, status, err) {
                //Error
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    adaptHTML(){
        return (
            <header id="header" >
                <div className="headerbar">
                    <div className="headerbar-left">
                        <ul className="header-nav header-nav-options">
                            <li className="header-nav-brand" >
                                <div className="brand-holder">
                                    <Link to={"/"}>
                                        <img src="img/webforce.png" alt="Logo"/>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <a className="btn btn-icon-toggle menubar-toggle" data-toggle="menubar" href="javascript:void(0);">
                                    <i className="fa fa-bars"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="headerbar-right">
                        <ul className="header-nav header-nav-options notify-ul">
                            <li className="notify-element">
                            </li>
                        </ul>


                        <ul className="header-nav header-nav-profile">
                            <li className="dropdown">
                                <a href="javascript:void(0);" className="dropdown-toggle ink-reaction" data-toggle="dropdown">
                                    <img src={this.state.image} alt="User" />
                                    <span className="profile-info">
                                    {this.state.name}
                                        <small>{this.state.email}</small>
								</span>
                                </a>
                                <ul className="dropdown-menu animation-dock">
                                    <li><a href="logout"><i className="fa fa-fw fa-power-off text-danger"></i> Salir</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>

                </div>
            </header>
        );
    }

    render() {
        return(
            this.adaptHTML()
        );
    }
}
export default HeaderComponent;