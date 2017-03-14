/**
 * Created by footer on 12/3/2017.
 */

//Defaults
import  React from 'react';

class FooterComponent extends  React.Component{

    constructor(props) {
        super(props);
        this.adaptHTML = this.adaptHTML.bind(this);
        this.state ={
            create : this.props.create,
            delete : this.props.delete
        };

    }

    adaptHTML(){
        let content = [];
        if(this.state.create != null){
            content = [
                <div className="section-floating-action-row">
                    <a className="btn ink-reaction btn-floating-action btn-lg btn-accent" onTouchTap={this.state.create} data-toggle="tooltip" data-placement="top" data-original-title="Add">
                        <i className="md md-add"></i>
                    </a>
                </div>
            ];
        }

        return (
            <div className="section-action style-primary">
                <div className="section-action-row"></div>
                <div className="section-floating-action-row-eliminar">
                    <a className="btn ink-reaction btn-floating-action btn-sm btn-accent"  onTouchTap={this.state.delete} data-toggle="tooltip" data-placement="top" data-original-title="Delete">
                        <span className="glyphicon glyphicon-trash"></span>
                    </a>
                </div>
                {content}
            </div>
        );
    }

    render() {
        return(
            this.adaptHTML()
        );
    }
}

export default FooterComponent;