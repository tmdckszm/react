import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.data.title
        }
    }
    render (){
        return(
            <article>
                <h2>Update</h2>
                <form action="/create_procsee" method="post"
                    onSubmit={(e)=>{
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                    }}
                >
                    <p>
                        <input 
                        type="text" 
                        name="title" 
                        placeholder="title"
                        value={this.state.title}
                        onChange={(e)=>{
                            console.log(e.target.value);
                        }}
                        ></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;