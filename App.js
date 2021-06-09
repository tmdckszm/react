import React, { Component } from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            first: Math.ceil(Math.random()*9),
            second: Math.ceil(Math.random()*9),
            value: '',
            result: '',
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(this.state.value) === this.state.first * this.state.second){
            this.setState({
                first: Math.ceil(Math.random()*9),
                second: Math.ceil(Math.random()*9),
                value: '',
                result: '정답:'+ this.state.value,
            });
        }
        else{
            this.setState({
                value: '',
                result: '땡',
            });
        }
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    render(){
        return (
          <div>
              <h2>{this.state.first}곱하기{this.state.second}은 무엇일까요?</h2>
              <form onSubmit ={this.onSubmit}>
                  <input type="number" value={this.state.value} onChange={this.onChange}/>
                  <button>입력</button>
              </form>
              <h2>{this.state.result}</h2>
          </div>  
        );
    }
}

export default App;