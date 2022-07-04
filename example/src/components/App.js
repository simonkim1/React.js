import React from 'react';
import Hello from './Hello'
import './App.css'

function App() {
  const name = "react";
  const style = {
      backgroundColor: "black",
      color: "white"
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className='gray-box'></div>
      {/* 주석 작성 방법*/}
      <Hello
        // 열리는 태그 내부에서는 이렇게 주석 작성 가능
      />
    </>
  );
};


export default App;