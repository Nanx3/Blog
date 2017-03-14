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
import {SimpleSelect, MultiSelect, ReactSelectize} from 'react-selectize';

//Table
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

//jQuery library
import $ from 'jquery';

//Others
//Component to show the messages of the system
import Snackbar from 'material-ui/Snackbar';


/*****************************************************POST COMPONENT************************************************************************/
class PostPage extends  React.Component
{
    constructor(props)
    {
        super(props);

        //--- Methods ---//
        //Add
        this.handleOpenCreatePosts = this.handleOpenCreatePosts.bind(this);

        //Delete all
        this.handleOpenDeleteAllPosts = this.handleOpenDeleteAllPosts.bind(this);
        this.DeleteAll = this.DeleteAll.bind(this);

        //Dialog to Consult/Update/Delete a record
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.UpdatePosts = this.UpdatePosts.bind(this);
        this.CreatePosts = this.CreatePosts.bind(this);
        this.DeletePosts = this.DeletePosts.bind(this);

        //--- Components ---//
        //Snackbar
        this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);

        //Table
        this.LoadTable = this.LoadTable.bind(this);
        this.Buttons = this.Buttons.bind(this);
        this.handleChangeSelectedRow = this.handleChangeSelectedRow.bind(this);
        this.handleChangeSelectedAllRows = this.handleChangeSelectedAllRows.bind(this);

        //Select
        this.withoutResults = this.withoutResults.bind(this);
        this.TagSelect = this.TagSelect.bind(this);


        //--- Variables ---//
        this.state = {
            //Inputs
            id: null,
            title: "",
            slug: "",
            description: "",

            //Modal to Consult/Update/Delete a record
            openModal: false, //flag to open or close the modal
            action: null,

            //Table
            records: [],
            route: 'admin/post',
            setIntervalID_Table: null,

            //Select
            tags: [], //All the tags of a user
            tagValue: [], //Number value
            tagsSelect: [], //Name value
            setIntervalID_TagSelect: null, //Interval

            //Rows selected
            postSelect:[],
            postSelectValue:[],

            //Others
            message: [], //Message to the snackbar
            messageOpen: false,
            loading: false
        };

        // Methods to change the values
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeSlug = this.handleChangeSlug.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeSelectTag = this.handleChangeSelectTag.bind(this);
    }

    //--- Intervals ---//
    componentDidMount()
    {
        //Load data into table
        this.LoadTable();

        //Time to update the table
        let table_id = setInterval(this.LoadTable , 5000);

        //Tag
        this.TagSelect();
        let tag_multiselect = setInterval(this.TagSelect, 5000);


        this.setState({
            setIntervalID_Table: table_id,
            setIntervalID_TagSelect: tag_multiselect
        });
    }

    componentWillUnmount()
    {
        //Delete interval
        clearInterval(this.state.setIntervalID_TagSelect);
        clearInterval(this.state.setIntervalID_Table);
    }

    //--- Handle Open ---//

    handleOpenCreatePosts()
    {
        //To open the create modal
        let CreateVariable  = ["Create"];
        this.setState({
            action: "Create"
        });
        //Redirect to handleOpen
        this.handleOpen(CreateVariable);
    }

    handleOpenDeleteAllPosts()
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
                    let tags_value = [], tags_select = [];

                    for(let j = 0; j < data.tags.length; j++)
                    {
                        tags_value.push(data.tags[j].id);
                        tags_select.push({value: data.tags[j].id, label: data.tags[j].name});
                    }

                             this.setState({
                                id: data.id,
                                title: data.title,
                                slug: data.slug,
                                description: data.description,
                                tagsSelect: tags_select,
                                tagValue : tags_value,
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
            title: "",
            slug: "",
            description: "",
            tagsSelect:[],
            tagValue: [],
            postSelect:[],
            postSelectValue:[],
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
        this.setState({title:event.target.value});
    }

    handleChangeSlug(event)
    {
        this.setState({slug:event.target.value});
    }

    handleChangeDescription(event)
    {
        this.setState({description:event.target.value});
    }

    handleChangeSelectTag(seleccion)
    {
        let tagValue = [],tagsSelect = [] ;
        for(let i = 0; i < seleccion.length; i++)
        {
            tagValue.push(seleccion[i].value);
            tagsSelect.push(seleccion[i]);
        }
        this.setState({tagsSelect: tagsSelect, tagValue: tagValue});
    }

    //--- Components Rows ---//
    handleChangeSelectedRow(row, isSelected){
        let postSelect =  this.state.postSelect;
        let postSelectValue =  this.state.postSelectValue;
        if(isSelected) {
            postSelect.push(row);
            postSelectValue.push(row.id);
        } else {
            var posicion;
            for(let i = 0; i < postSelect.length; i++){
                if (postSelect[i].id == row.id){
                    posicion = i;
                    break;
                }
            }
            postSelect.splice(posicion,1);
            postSelectValue.splice(posicion,1);
        }
        this.setState({postSelect: postSelect, postSelectValue: postSelectValue});
    }

    handleChangeSelectedAllRows(isSelected,rows){
        let postSelect = [];
        let postSelectValue = [];
        if(isSelected){
            postSelect = rows;
            for(let i = 0; i < rows.length; i++){
                postSelectValue.push(rows[i].id);
            }
        }
        this.setState({postSelect: postSelect, postSelectValue: postSelectValue});
    }

    //--- Select ---//
    withoutResults()
    {
        return React.createElement("div", {className: "no-results-found"},
            !!self.req ? "Loading ..." : "No results found"
        )
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
            url: 'admin/post',
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
                    let date_object = new Date(records[i].updated_at.replace(/-/g, "/"));

                    //Concatenate
                    records_routes.push({
                        id: records[i].id,
                        title: records[i].title,
                        slug: records[i].slug,
                        name: records[i].users.name,
                        date:  date_object.getDate() + "/" + (date_object.getMonth() + 1) + "/" + date_object.getFullYear(),
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

    // Fill select
    TagSelect() {
        $.ajax({
            type: 'GET',
            url: 'tags/select',
            context: this,
            dataType: 'json',
            cache: false,
            success: function (data) {

                this.setState({tags: data});

            }.bind(this),
            error: function (xhr, status, err) {
                //Error
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    CreatePosts()
    {
        this.setState({
            loading:true
        });
        let token = $('meta[name="csrf-token"]').attr('content');
        $.ajax({
            type: 'POST',
            url: 'admin/post',
            context: this,
            data: {
                title: this.state.title,
                description: this.state.description,
                tags: this.state.tagValue,
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

    UpdatePosts()
    {
        this.setState({
            loading:true
        });
        let id = this.state.id;
        let token = $('meta[name="csrf-token"]').attr('content');
        $.ajax({
            type: 'PUT',
            url: 'admin/post/'+id,
            context: this,
            data: {
                title: this.state.title,
                description: this.state.description,
                tags: this.state.tagValue,
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

    DeletePosts()
    {
        this.setState({
            loading:true
        });

        let id = this.state.id;
        let token = $('meta[name="csrf-token"]').attr('content');

        $.ajax({
            type: 'DELETE',
            url: 'admin/post/' + id,
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
        let post = this.state.postSelectValue;

        if(post.length > 0) {
            $.ajax({
                type: 'DELETE',
                url: 'admin/post/deleteall',
                context: this,
                data: {
                    id: this.state.postSelectValue,
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
                                floatingLabelText="* Title"
                                hintText="Title"
                                fullWidth={true}
                                type="text"
                                onChange={this.handleChangeTitle}
                                value={this.state.title}
                            />

                            <TextField
                                floatingLabelText="Description"
                                fullWidth={true}
                                type="text"
                                multiLine={true}
                                rows={3}
                                onChange={this.handleChangeDescription}
                                value={this.state.description}
                            />

                            <br/>
                            <div>
                                <label>* Tags</label>
                                <MultiSelect
                                    className = "input-formMUI"
                                    placeholder = "* Tags"
                                    theme = "material"
                                    options = {this.state.tags}
                                    name = "Cliente"
                                    style = {{ width: '100%'}}
                                    onValuesChange = {this.handleChangeSelectTag}
                                    values={this.state.tagsSelect}
                                    renderNoResultsFound = {this.withoutResults}
                                />
                            </div>
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
                title_modal = "Create post";
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
                        onTouchTap={this.CreatePosts}
                    />
                ];
                break;
            case "Consult":
                title_modal = "Consult post";
                actions = [
                    <FlatButton
                        label="Close"
                        primary={true}
                        keyboardFocused={true}
                        onTouchTap={this.handleClose}
                    />
                ];

                let title = [], slug = [], description = [], tags = [];
                if(this.state.tagsSelect.length > 0)
                {
                    for (let i = 0; i <  this.state.tagsSelect.length ; i++)
                    {
                        tags.push(<dd>{this.state.tagsSelect[i].label}</dd>);
                    }
                }else tags = [<dd>Sin registro</dd>];

                if(this.state.title != "") title = [<div><dt>Title</dt><dd>{this.state.title}</dd></div>];
                if(this.state.slug != "") slug = [<div><dt>Slug</dt><dd>{this.state.slug}</dd></div>];
                if(this.state.description != "") description = [<div><dt>Description</dt><dd>{this.state.description}</dd></div>];

                content = [
                    <div className = "row">
                        <div className = "col-md-12">
                            <div className="consultar-registro">
                                <dl className = "dl-horizontal text-center">
                                    {title}
                                    {slug}
                                    {description}
                                    <dt>Tags</dt>{tags}
                                </dl>
                            </div>
                        </div>
                        <div className = "col-md-3"></div>
                    </div>
                ];
                break;
            case "Update":
                title_modal = "Update post";
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
                        onTouchTap={this.UpdatePosts}
                    />
                ];
                break;
            case "Delete":
                title_modal = "Delete post";
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
                        onTouchTap={this.DeletePosts}
                    />
                ];
                content = [<h4 className="alineado-titulo">Are you sure that you want to delete {this.state.title}?</h4>];
                break;
            case "DeleteAll":
                title_modal = "Delete posts";
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
                        <div className="section-header"><h2 className="text-primary">Posts</h2></div>

                        <BootstrapTable data={this.state.records}
                                        options={{ noDataText :"Not results found"}}
                                        pagination={true}
                                        selectRow={SelectedRow}
                                        hover={true}
                                        search={true}>
                            <TableHeaderColumn hidden = "true" dataField="id" isKey = {true}>n.º</TableHeaderColumn>
                            <TableHeaderColumn dataField = "title" dataSort = {true}>Title</TableHeaderColumn>
                            <TableHeaderColumn dataField = "name" dataSort = {true}>User</TableHeaderColumn>
                            <TableHeaderColumn dataField = "date" dataSort = {true}>Date</TableHeaderColumn>
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
                        <FooterComponent delete={this.handleOpenDeleteAllPosts} create={this.handleOpenCreatePosts}/>
                    </div>
                </section>
            </div>
        );
    }
}

class Post extends React.Component {
    render()
    {
        return <PostPage/>;
    }
}
export default Post;