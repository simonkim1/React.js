import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        Name: '',
        Nickname: ''
    });

    const { Name, Nickname } = inputs;

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
    };

    return (
        <div>
            <input name="Name" placeholder='Name' onChange={onChange} value={Name}/>
            <input name="Nickname" placeholder='NickName' onChange={onChange} value={Nickname} />
            <button onClick={onReset}>Reset</button>
            <div>
                <b>Value: </b>
                {Name} ({Nickname})
            </div>
        </div>
    );
}

export default InputSample;