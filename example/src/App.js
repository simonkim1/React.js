import React from 'react';
import './App.css';
import Hello from './component/Hello'

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rm"
  }

  return (
    <>
      <div style={style}>{name}</div>
      <Hello />
      <Hello />
      <Hello />
      <br />
      <input />
      <div className='gray-box'></div>
      { /*중괄호로 감싸야 보이지 않는다. */}
      <Hello 
        // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있다.
      />
      <Hello name="react" />
    </>
  );
}

export default App;