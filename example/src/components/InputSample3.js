import React, { useState, useRef } from 'react';

function InputSample() {
    const [ inputs, setInputs ] = useState({
        name: '',
        nickname: ''
    });

    // 1. useRef() 를 사용하여 Ref 객체를 만든다.
    const nameInput = useRef();

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onRest = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        // 3. 그러면 Ref 객체의 .current 값은 우리가 원하는 DOM을 가르키게 된다.
        nameInput.current.focus();
    };

    return (
        <div>
            <input
                name='name'
                placeholder='이름'
                onChange={onChange}
                value={name}
                // 2. Ref 객체를 선택하고 싶은 DOM에 ref 값으로 설정해 준다.
                ref={nameInput}
            />
            <input
                name='nickname'
                placeholder='닉네임'
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onRest}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;