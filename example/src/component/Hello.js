import React from 'react';

// function Hello(props) {
//     return <div style={{ color : props.color }}>Hello! {props.name}</div>
// }

function Hello({ color, name }) {
    return <div style={{ color }}>Hello! { name }</div>
}

Hello.defaultProps = {
    name: "이름없음"
}

export default Hello;