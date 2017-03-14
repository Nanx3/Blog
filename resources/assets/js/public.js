/**
 * Created by Nanx3 on 13/3/2017.
 */

//Defaults to React
import   React from 'react';
import { Router, Route, Link } from 'react-router';
import  Article from './article';

//Material UI Componentes
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Public extends React.Component{
    constructor(props) {
        super(props);
        this.adaptHTML = this.adaptHTML.bind(this);
        this.LoadPost = this.LoadPost.bind(this);

        //--- Variables ---//
        this.state = {
            //Inputs
            records: [],
            setIntervalID: null,
        };
    }


    //--- Intervals ---//
    componentDidMount()
    {
        //Load data
        this.LoadPost();

        //Time to update
        let post_id = setInterval(this.LoadPost , 5000);

        this.setState({
            setIntervalID: post_id,
        });
    }

    componentWillUnmount()
    {
        //Delete interval
        clearInterval(this.state.setIntervalID);
    }

    //--- Methods ---//
    LoadPost()
    {
        //Load data
        $.ajax({
            type: 'GET',
            url: 'public/blog',
            context: this,
            dataType: 'json',
            cache: false,
            success: function(data)
            {
                this.setState({records: data});

            }.bind(this),
            error: function(xhr, status, err) {
                //Error
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    adaptHTML(){
        let content = [];
        let records = this.state.records;

            for (let i = 0; i <  records.length ; i++)
            {
                content.push(<Article  title={records[i].title} slug={records[i].slug} description={records[i].description} date={records[i].updated_at} tags={records[i].tags} user={records[i].users.name}/>);
            }

         return (
            <MuiThemeProvider >
                <div>
                    <header>
                        <div className="header-inner">
                            <div className="logo-holder">
                                <a href="index.html"><img src="img/webforce.png" alt /></a>
                            </div>
                            <div className="nav-button-holder">
                                <div className="nav-button vis-m"><span /><span /><span /></div>
                            </div>
                            <div className="nav-holder">
                                <nav>
                                    <ul>
                                        <li><a href="blog.html" className="act-link">Blog</a></li>
                                        <li><a href="admin">Admin</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </header>

                <div id="wrapper">
                    <div className="content-holder elem scale-bg2 transition3">
                        <div className="fixed-title"><span>WebForce HQ</span></div>
                        <div className="content">
                            <section className="parallax-section">
                                <div className="overlay" />
                                <div className="bg" style={{backgroundImage: 'url(img/login-back.jpg)'}} data-top-bottom="transform: translateY(200px);" data-bottom-top="transform: translateY(-200px);" />
                                <div className="container">
                                    <h2>Blog</h2>
                                    <div className="separator" />
                                    <h3 className="subtitle">The official WebForce HQ blog</h3>
                                </div>
                                <a className="custom-scroll-link sect-scroll" href="#sec1"><i className="fa fa-angle-double-down" /></a>
                            </section>
                            <div className="sections-bg" />
                            <section id="sec1">
                                <div className="container column-container">
                                    <div className="row">
                                        <div className="col-md-7">

                                            {content}

                                            <div className="clearfix" />
                                        </div>
                                        <div className="col-md-4">
                                            <div className="sidebar">
                                                <div className="widget">
                                                    <h3>About WebForce HQ</h3>
                                                    <div className="clearfix" />
                                                    <img src="img/webforce.png" className="respimg waimg" alt />
                                                    <p>Etiam in nulla arcu, ut vehicula velit. Vivamus dapibus rutrum mi ut aliquam. In hac habitasse platea dictumst. Integer sagittis neque a tortor tempor in porta sem vulputate.</p>
                                                </div>
                                                <div className="widget">
                                                    <h3>Categories</h3>
                                                    <div className="clearfix" />
                                                    <ul>
                                                        <li className="cat-item"><a href="#">Standard</a> (3)</li>
                                                        <li className="cat-item"><a href="#">Video</a> (6)</li>
                                                        <li className="cat-item"><a href="#">Gallery</a> (12)</li>
                                                        <li className="cat-item"><a href="#">Quotes</a> (4)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end sidebar */}
                                    </div>
                                </div>
                            </section>
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
export default Public;
