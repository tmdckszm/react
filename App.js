import React, { Component } from 'react';
import Toc from "./Toc"
import Content from "./Content"
import Subject from './Subject';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode: 'read',
            selected_content_id:2,
            welcome:{title: 'welcome', desc:'Hello, React'},
            subject:{title:'WEB', sub:'world wide web!'},
            contents:[
                {id:1, title:'HTML', desc:'HTML is HyperText for impormation'},
                {id:2, title:'CSS', desc:'CSS is for design'},
                {id:3, title:'Javascript', desc:'JavaScript is for interactive'},
            ]
        }
    }
    render () {
        var _title = null;
        var _desc = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        }else if(this.state.mode ==='read'){
            var i =0;
            while(i<this.state.contents.length){
                var data = this.state.contents[i];
                if(data.id === this.state.selected_content_id){
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i+=1;
            }
        }
        return (
            <div className ="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={()=>{
                        this.setState({
                            mode: 'welcome'
                        });
                    }}
                >
                </Subject>
               {/* 
                <header>
                    <h1><a href="/" onClick={(e)=>{
                        console.log(e);
                        e.preventDefault();
                        this.setState({
                            mode:'welcome'
                        });
                    }}
                    >{this.state.subject.title}</a></h1>
                    {this.state.subject.sub}
                </header>
               */} 
                <Toc onChangePage={(id)=>{
                    this.setState({
                        mode:'read',
                        selected_content_id: Number(id)
                    });
                }}
                data={ this.state.contents }
                ></Toc>
                <Content title={_title} desc = {_desc}
                ></Content>
            </div>
        );
    }
}

export default App;