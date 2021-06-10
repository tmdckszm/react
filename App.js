import React, {useRef, useState } from 'react';

const App = () =>{
    const[word, setWord] = useState('승찬');
    const[result, setResult] = useState('');
    const[value, setValue] = useState('');
    const inputRef = useRef(null);

    const onSubmitInput = (e) => {
        e.preventDefault();
        if(word[word.length-1] === value[0]){
            setWord(value);
            setResult('딩동댕');
            setValue('');
        }
        else{
            setResult('땡');
            setValue('');
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }


    return(
        <div>
            <h2>{word}</h2>
            <form onSubmit={onSubmitInput}>
                <input ref={inputRef} value={value} onChange={onChangeInput}/>
                <button>입력</button>
            </form>
            <h2>{result}</h2>
        </div>
    );
}

export default App;