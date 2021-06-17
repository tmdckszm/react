import React, { Component, Fragment } from 'react';
import Try from './Try'

const getNumbers = () => {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const arr = [];
    for (var i=0; i<4; i++){
        const chosen = candidate.splice(Math.floor(Math.random() * (9-i)),1)[0]
        arr.push(chosen);
    }
    return arr;
};

class BaseBallGame extends Component{
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')){
            this.setState({
                result: '홈런',
                tries:[...this.state.tries, {try: this.state.value, result: '홈런!'}],
            });
        }
        else{
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            var strike = 0;
            var ball = 0;
            if(this.state.tries.length>=9){
                alert('게임을 다시 시작합니다');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            }else {
                for(var i=0; i<4; i++){
                    if(answerArray[i]=== this.state.answer[i]){
                        strike += 1;
                    } else if(this.state.answer.includes(answerArray[i])){
                        ball += 1;
                    }
                    this.setState({
                        tries: [...this.state.tries, {try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
                        value: '',
                    })
                }
            }
        }
    };
    onChangeForm = (e) => {
        this.setState({
            value: e.target.value,

        });
        console.log(e.target.value);
    };

    render(){
        return(
            <Fragment>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeForm}></input>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map( (v,i)=> {
                        return(
                            <Try key={`${i+1}차시도 :`} tryInfo={v}/>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
}
export default BaseBallGame;