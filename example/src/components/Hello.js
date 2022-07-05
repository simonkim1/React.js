import React  from "react";

function Hello({ name, color, isSpecial }) {
    return (
        <div style={{ color: color}}>
            {  isSpecial ? <b>*</b> : null }
            {  isSpecial && <b>*</b> }
            Hello! {name}
        </div>
    );
}

Hello.defaultProps = {
    name: "doesn't exist"
}

export default Hello;