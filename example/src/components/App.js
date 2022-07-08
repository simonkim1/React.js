import React, { useRef } from 'react';
import './App.css'
// import Hello from './Hello'
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
// import InputSample2 from './InputSample2';
// import InputSample3 from './InputSample3';
// import UserList from './UserList';
import UserList2 from './UserList2';

function App() {
  // const name = "react";
  // const style = {
  //     backgroundColor: "black",
  //     color: "white"
  // }
    const USERS1 = [
        {
            id: 1,
            userName: "Kim",
            email: "Kim@gmail.com"
        },
        {
            id: 2,
            userName: "Lee",
            email: "Lee@naver.com"
        },
        {
            id: 3,
            userName: "Choi",
            email: "Choi@daum.net"
        }
    ];
    const nextId = useRef(4);
    const onCreate = () => {
      // 나중에 구현 할 배열에 항목 추가하는 로직
      // ...
      
      nextId.current += 1;
    }
  return (
    <>
      {/*<Hello />
      <div style={style}>{name}</div>
      <div className='gray-box'></div>
      <Hello
        // 열리는 태그 내부에서는 이렇게 주석 작성 가능
      />*/}

      {/* <Wrapper>
        <Hello />
        <Hello name='JavaScript'/>
        <Hello name='react' color='red' />
        <Hello isSpecial={true} />
        <Hello isSpecial={false} />
        <Hello isSpecial />
      </Wrapper> */}

      {/* <Counter /> */}

      {/* <InputSample /> */}

      {/* <InputSample2 /> */}

      {/* <InputSample3 /> */}

      {/* <UserList /> */}

      <UserList2 users={USERS1} />
    </>
  );
};


export default App;