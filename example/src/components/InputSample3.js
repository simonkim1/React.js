import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        Name: '',
        Nickname: ''
    });
    
    const nameInput = useRef();
    
    const {Name, Nickname} = inputs;
    
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    
    const onReset = () => {
        setInputs({
            Name: '',
            Nickname: ''
        });
        
        nameInput.current.focus();
    };
    
    return (
        <div>
            <input
                name="Name"
                placeholder='Name'
                onChange={onChange}
                value={Name}
                ref={nameInput}
            />
            <input
                name="Nickname"
                placeholder='Nickname'
                onChange={onChange}
                value={Nickname}
            />
            <button onClick={onReset}>Reset</button>
            <div>
                <b>Value: </b>
                {Name} ({Nickname})
            </div>
        </div>
    );
}

export default InputSample;