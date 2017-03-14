/**
 * Created by Nanx3 on 12/3/2017.
 */

/*****************************************************IMPORTS************************************************************************/
//--- Defaults ---//
import  React from 'react';
//Footer component that permits to add new record
import  FooterComponent from './Components/footer';

//--- Material UI ---//
//Progress Bar
import LinearProgress from 'material-ui/LinearProgress';

//--- Form ---//
//Modal component to create/delete/update a record
import Dialog from 'material-ui/Dialog';

//Button
import FlatButton from 'material-ui/FlatButton';

//Inputs
import TextField from 'material-ui/TextField';

//Table
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

//jQuery library
import $ from 'jquery';

//Others
//Component to show the messages of the system
import Snackbar from 'material-ui/Snackbar';


/*****************************************************POST COMPONENT************************************************************************/
class TagsPage extends  React.Component
{
    constructor(props)
    {
        super(props);

        //--- Methods ---//
        //Add
        this.handleOpenCreateTags = this.handleOpenCreateTags.bind(this);

        //Delete all
        this.handleOpenDeleteAllTags = this.handleOpenDeleteAllTags.bind(this);
        this.DeleteAll = this.DeleteAll.bind(this);

        //Dialog to Consult/Update/Delete a record
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.UpdateTags = this.UpdateTags.bind(this);
        this.CreateTags = this.CreateTags.bind(this);
        this.DeleteTags = this.DeleteTags.bind(this);

        //--- Components ---//
        //Snackbar
        this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);

        //Table
        this.LoadTable = this.LoadTable.bind(this);
        this.Buttons = this.Buttons.bind(this);
        this.handleChangeSelectedRow = this.handleChangeSelectedRow.bind(this);
        this.handleChangeSelectedAllRows = this.handleChangeSelectedAllRows.bind(this);


        //--- Variables ---//
        this.state = {
            //Inputs
            id: null,
            name: "",

            //Modal to Consult/Update/Delete a record
            openModal: false, //flag to open or close the modal
            action: null,

            //Table
            records: [],
            route: 'admin/tag',
            setIntervalID_Table: null,

            //Rows selected
            tagSelect:[],
            tagSelectValue:[],

            //Others
            message: [], //Message to the snackbar
            messageOpen: false,
            loading: false
        };

        // Methods to change the values
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }

    //--- Intervals ---//
    componentDidMount()
    {
        //Load data into table
        this.LoadTable();

        //Time to update the table
        let table_id = setInterval(this.LoadTable , 5000);

        this.setState({
            setIntervalID_Table: table_id,
        });
    }

    componentWillUnmount()
    {
        //Delete interval
        clearInterval(this.state.setIntervalID_Table);
    }

    //--- Handle Open ---//

    handleOpenCreateTags()
    {
        //To open the create modal
        let CreateVariable  = ["Create"];
        this.setState({
            action: "Create"
        });
        //Redirect to handleOpen
        this.handleOpen(CreateVariable);
    }

    handleOpenDeleteAllTags()
    {
        //To open the delete modal
        let DeleteVariable = ["DeleteAll"];
        this.setState({
            action: "DeleteAll"
        });
        //Redirect to handleOpen
        this.handleOpen(DeleteVariable);
    }

    handleOpen (variables)
    {
        //To load the records and show the data into the table
        if(variables[0] != "Create" && variables[0] != "DeleteAll") {
            $.ajax({
                // Array of one dimention to store the action information
                url: variables[1],
                dataType: 'json',
                type: 'GET',
                cache: false,
                success: function (data)
                {
                             this.setState({
                                id: data.id,
                                name: data.name,
                                action: variables[0]
                            });
                }.bind(this),
                error: function (xhr, status, err) {
                    //Error
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        }
        this.setState({
            openModal: true
        });
    }

    //--- Handle Close ---//

    handleClose()
    {
        this.setState({
            id: null,
            openModal: false,
            name: "",
            tagSelect:[],
            tagSelectValue:[],
            action:null,
            loading: false
        });
    }

    handleCloseSnackbar()
    {
        //Messages of the system
        this.setState({messageOpen: false});
    }


    //--- Handle Change Fields ---//

    handleChangeTitle(event)
    {
        this.setState({name:event.target.value});
    }

    //--- Components Rows ---//
    handleChangeSelectedRow(row, isSelected){
        let tagSelect =  this.state.tagSelect;
        let tagSelectValue =  this.state.tagSelectValue;
        if(isSelected) {
            tagSelect.push(row);
            tagSelectValue.push(row.id);
        } else {
            var posicion;
            for(let i = 0; i < tagSelect.length; i++){
                if (tagSelect[i].id == row.id){
                    posicion = i;
                    break;
                }
            }
            tagSelect.splice(posicion,1);
            tagSelectValue.splice(posicion,1);
        }
        this.setState({tagSelect: tagSelect, tagSelectValue: tagSelectValue});
    }

    handleChangeSelectedAllRows(isSelected,rows){
        let tagSelect = [];
        let tagSelectValue = [];
        if(isSelected){
            tagSelect = rows;
            for(let i = 0; i < rows.length; i++){
                tagSelectValue.push(rows[i].id);
            }
        }
        this.setState({tagSelect: tagSelect, tagSelectValue: tagSelectValue});
    }

    //--- Buttons table ---//
    Buttons(cell)
    {
        //Buttons structure

        //Variable that will have the route and will send the id if you are modifying, deleting or consulting
        let ConsultVariable = [ "Consult" , cell[0].toString() ];
        let UpdateVariable = [ "Update" , cell[0].toString() ];
        let DeleteVariable  = [ "Delete"  , cell[0].toString() ];

        return (
            React.createElement(
                "div",
                {className: "text-right"},
                //Consult
                React.createElement("button", {
                        className: "btn btn-icon-toggle",
                        "data-toggle": "tooltip",
                        "data-placement": "top",
                        "data-original-title": "Consult",
                        onTouchTap:this.handleOpen.bind(this,ConsultVariable)},
                    React.createElement("i", { className: "fa fa-eye" })
                ),

                //Update
                React.createElement("button", {
                        className: "btn btn-icon-toggle",
                        "data-toggle": "tooltip",
                        "data-placement": "top",
                        "data-original-title": "Update",
                        onTouchTap:this.handleOpen.bind(this,UpdateVariable)},
                    React.createElement("i", { className: "fa fa-pencil" })
                ),

                //Delete
                React.createElement("button", {
                        className: "btn btn-icon-toggle",
                        "data-toggle": "tooltip",
                        "data-placement": "top",
                        "data-original-title": "Delete",
                        onTouchTap:this.handleOpen.bind(this,DeleteVariable)},
                    React.createElement("i", { className: "fa fa-trash-o" })
                )
            )
        );
    }

    //--- Methods ---//
    LoadTable()
    {
        //Load data
        $.ajax({
            type: 'GET',
            url: 'admin/tag',
            context: this,
            dataType: 'json',
            cache: false,
            success: function(data)
            {
                //Get server data
                let records = data;
                //Variable with the data and the route of a record
                let records_routes =[];
                for ( let i=0; i< records.length; i++)
                {
                    //Concatenate
                    records_routes.push({
                        id: records[i].id,
                        name: records[i].name,
                        routes: [ //route of the record
                            [ this.state.route+"/"+records[i].id]
                        ]
                    });
                }
                //Store data
                this.setState({records: records_routes});

            }.bind(this),
            error: function(xhr, status, err) {
                //Error
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    CreateTags()
    {
        this.setState({
            loading:true
        });
        let token = $('meta[name="csrf-token"]').attr('content');
        $.ajax({
            type: 'POST',
            url: 'admin/tag',
            context: this,
            data: {
                name: this.state.name,
                _token: token
            },
            success: function(data) {
                    this.LoadTable();
                    this.setState({
                        loading: false,
                        message: ["Record created successfully"],
                        messageOpen: true
                    });
                    this.handleClose();
            }.bind(this),
            error: function(xhr, status, err) {
                //Error
                console.error(this.props.url, status, err.toString());

                //Error 422
                let errors = [];

                let errors_request = xhr["responseJSON"];
                //ciclo para guardar los errores
                Object.getOwnPropertyNames(errors_request).forEach(function(value, idx, array) {
                    errors.push(errors_request[value] + " "); //Save errors
                });

                this.setState({
                    loading: false,
                    message: [errors[0]],
                    messageOpen: true
                });
            }.bind(this)
        });
    }

    UpdateTags()
    {
        this.setState({
            loading:true
        });
        let id = this.state.id;
        let token = $('meta[name="csrf-token"]').attr('content');
        $.ajax({
            type: 'PUT',
            url: 'admin/tag/'+id,
            context: this,
            data: {
                name: this.state.name,
                _token: token
            },
            success: function(data) {
                    this.LoadTable();
                    this.setState({
                        loading: false,
                        message: ["Record updated successfully"],
                        messageOpen: true
                    });
                    this.handleClose();
            }.bind(this),
            error: function(xhr, status, err) {
                //Error
                console.error(this.props.url, status, err.toString());

                //Error 422
                let errors = [];

                let errors_request = xhr["responseJSON"];
                //ciclo para guardar los errores
                Object.getOwnPropertyNames(errors_request).forEach(function(value, idx, array) {
                    errors.push(errors_request[value] + " "); //Save errors
                });

                this.setState({
                    loading: false,
                    message: [errors[0]],
                    messageOpen: true
                });
            }.bind(this)
        });
    }

    DeleteTags()
    {
        this.setState({
            loading:true
        });

        let id = this.state.id;
        let token = $('meta[name="csrf-token"]').attr('content');

        $.ajax({
            type: 'DELETE',
            url: 'admin/tag/' + id,
            context: this,
            data:{
                _token: token
            },
            success: function (data) {
                if(!data.success){
                    //Si hubo error guarda los errores
                    var index = data.errors.indexOf(false);
                    if (index > -1) {
                        data.errors.splice(index, 1)
                    }
                    this.setState({
                        loading: false,
                        message: data.errors,
                        messageOpen: true
                    });
                }else{
                    this.LoadTable();
                    this.setState({
                        loading: false,
                        message: ["Record deleted successfully"],
                        messageOpen: true
                    });
                    this.handleClose();
                }
            }.bind(this),
            error: function (error) {
                console.log(error);
            }.bind(this)
        });
    }

    DeleteAll()
    {
        this.setState({
            loading:true
        });

        //Delete all the selected registers
        let token = $('meta[name="csrf-token"]').attr('content');
        let post = this.state.tagSelectValue;

        if(post.length > 0) {
            $.ajax({
                type: 'DELETE',
                url: 'admin/tag/deleteall',
                context: this,
                data: {
                    id: this.state.tagSelectValue,
                    _token: token
                },
                success: function (data) {
                    if (!data.success) {
                        //Si hubo error guarda los errores
                        var index = data.errors.indexOf(false);
                        if (index > -1) {
                            data.errors.splice(index, 1)
                        }
                        this.setState({
                            loading: false,
                            message: data.errors,
                            messageOpen: true
                        });
                    } else {
                        this.LoadTable();
                        this.setState({
                            loading: false,
                            message: ["Records deleted successfully"],
                            messageOpen: true
                        });
                        this.handleClose();
                    }
                }.bind(this),
                error: function (error) {
                    console.log(error);
                }.bind(this)
            });
        }else{
            this.handleClose();
        }
    }

    render() {

        let actions = [], title_modal = "";
        let content = [
            <div>
                <div className = "row">
                    <div className="consultar-registro">
                        <div className = "col-md-12">
                            <span class="help-block">(*) Required fields </span>
                            <TextField
                                floatingLabelText="* Name"
                                hintText="Name"
                                fullWidth={true}
                                type="text"
                                onChange={this.handleChangeTitle}
                                value={this.state.name}
                            />
                        </div>
                    </div>
                </div>
            </div>
        ];

        let SelectedRow = {
            mode: "checkbox",
            clickToSelect: true,
            bgColor: "rgb(240,255,255)",
            onSelect:  this.handleChangeSelectedRow,
            onSelectAll: this.handleChangeSelectedAllRows
        };

        switch(this.state.action){
            case "Create":
                title_modal = "Create tag";
                actions = [
                    <FlatButton
                        label="Cancel"
                        primary={true}
                        onTouchTap={this.handleClose}
                    />,
                    <FlatButton
                        label="Save"
                        primary={true}
                        keyboardFocused={true}
                        onTouchTap={this.CreateTags}
                    />
                ];
                break;
            case "Consult":
                title_modal = "Consult tag";
                actions = [
                    <FlatButton
                        label="Close"
                        primary={true}
                        keyboardFocused={true}
                        onTouchTap={this.handleClose}
                    />
                ];

                let name = [];
                if(this.state.name != "") name = [<div><dt>Name</dt><dd>{this.state.name}</dd></div>];

                content = [
                    <div className = "row">
                        <div className = "col-md-12">
                            <div className="consultar-registro">
                                <dl className = "dl-horizontal text-center">
                                    {name}
                                </dl>
                            </div>
                        </div>
                        <div className = "col-md-3"></div>
                    </div>
                ];
                break;
            case "Update":
                title_modal = "Update tag";
                actions = [
                    <FlatButton
                        label="Cancel"
                        primary={true}
                        onTouchTap={this.handleClose}
                    />,
                    <FlatButton
                        label="Save"
                        primary={true}
                        keyboardFocused={true}
                        onTouchTap={this.UpdateTags}
                    />
                ];
                break;
            case "Delete":
                title_modal = "Delete tag";
                actions = [
                    <FlatButton
                        label="Cancel"
                        primary={true}
                        onTouchTap={this.handleClose}
                    />,
                    <FlatButton
                        label="Accept"
                        primary={true}
                        keyboardFocused={true}
                        onTouchTap={this.DeleteTags}
                    />
                ];
                content = [<h4 className="alineado-titulo">Are you sure that you want to delete {this.state.name}?</h4>];
                break;
            case "DeleteAll":
                title_modal = "Delete tags";
                actions = [
                    <FlatButton
                        label="Cancel"
                        primary={true}
                        onTouchTap={this.handleClose}
                    />,
                    <FlatButton
                        label="Aceppt"
                        primary={true}
                        keyboardFocused={true}
                        onTouchTap={this.DeleteAll}
                    />
                ];
                content = [<h4 className="alineado-titulo">Are you sure that you want to delete all selected records?</h4>];
                break;
            default:
                break;
        }

        //Feedback
        if(this.state.loading){
            actions = [
                <LinearProgress mode="indeterminate" />
            ];
        }

        return(
            <div id = "content">
                <section className = "has-actions style-default-bright">
                    <div className="section-body">
                        <div className="section-header"><h2 className="text-primary">Tags</h2></div>

                        <BootstrapTable data={this.state.records}
                                        options={{ noDataText :"Not results found"}}
                                        pagination={true}
                                        selectRow={SelectedRow}
                                        hover={true}
                                        search={true}>
                            <TableHeaderColumn hidden = "true" dataField="id" isKey = {true}>n.º</TableHeaderColumn>
                            <TableHeaderColumn dataField = "name" dataSort = {true}>Name</TableHeaderColumn>
                            <TableHeaderColumn dataField = "routes"  dataFormat={this.Buttons} />
                        </BootstrapTable>

                        <Dialog
                            titleClassName="form_background"
                            title = {title_modal}
                            titleStyle = {{ color:'#ffffff'}}
                            actions = {actions}
                            modal = {false}
                            open = {this.state.openModal}
                            onRequestClose={this.handleClose}
                            autoScrollBodyContent={true}
                            autoDetectWindowHeight={true}
                        >
                            {content}

                        </Dialog>

                        <Snackbar
                            open={this.state.messageOpen}
                            message={this.state.message[0]}
                            autoHideDuration={4000}
                            onRequestClose={this.handleCloseSnackbar}
                        />
                        <FooterComponent delete={this.handleOpenDeleteAllTags} create={this.handleOpenCreateTags}/>
                    </div>
                </section>
            </div>
        );
    }
}

class Tag extends React.Component {
    render()
    {
        return <TagsPage/>;
    }
}
export default Tag;