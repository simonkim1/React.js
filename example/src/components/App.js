import React from 'react';
import Hello from './Hello'
import './App.css'
import Wrapper from './Wrapper';

function App() {
  // const name = "react";
  // const style = {
  //     backgroundColor: "black",
  //     color: "white"
  // }

  return (
    <>
      {/*<Hello />
      <div style={style}>{name}</div>
      <div className='gray-box'></div>
      <Hello
        // 열리는 태그 내부에서는 이렇게 주석 작성 가능
      />*/}

      <Wrapper>
        <Hello />
        <Hello name='JavaScript'/>
        <Hello name='react' color='red' />
        <Hello isSpecial={true} />
        <Hello isSpecial={false} />
        <Hello isSpecial />
      </Wrapper>
    </>
  );
};


export default App;