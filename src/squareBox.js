import React from 'react'

const squareBox = (props) => {
    return (<div id= {props.id} onClick={props.onclickprops}>
        {props.value}
    </div>)
}

export default squareBox;