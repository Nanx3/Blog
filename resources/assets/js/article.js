/**
 * Created by Nanx3 on 14/3/2017.
 */

//Defaults to React
import   React from 'react';
import { Router, Route, Link } from 'react-router';

class Article extends React.Component{
    constructor(props) {
        super(props);
        this.adaptHTML = this.adaptHTML.bind(this);

        //--- Variables ---//
        this.state = {
            id: this.props.id,
            title: this.props.title,
            slug: this.props.slug,
            description: this.props.description,
            tags:this.props.tags,
            date: this.props.date,
            user: this.props.user,
        };
    }


    adaptHTML(){

        let tags = [];

            for(let j = 0; j < this.props.tags.length; j++)
            {
                tags.push(<span className="label label-primary">{this.props.tags[j].name}</span>);
            }

        return (
            <article>
                <ul className="blog-title">
                    <li><a href="#" className="tag">{this.props.date}</a></li>
                    <li> - </li>
                    <li><a href="#" className="tag">{this.props.slug}</a></li>
                </ul>

                <div className="row">
                    <div className="col-md-2">
                        <img src="img/logo-02.png" className="respimg waimg" alt=""/>
                        <h4 align="left">{this.props.user}</h4>
                    </div>
                    <div className="col-md-10">
                        <div className="blog-text">
                            <h3><stong>{this.props.title}</stong></h3>
                            <p>
                                {this.props.description}
                            </p>
                            <div className="row">
                                {tags}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    render() {
        return(
            this.adaptHTML()
        );
    }
}
export default Article;
