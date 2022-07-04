import React  from "react";

function Hello({ name, color}) {
    return <div style={{ color: color}}>Hello! {name}</div>
}

Hello.defaultProps = {
    name: "doesn't exist"
}

export default Hello;