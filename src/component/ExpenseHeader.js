import React from 'react'

function ExpenseHeader(props) {
    return (
        <div>
            <h4 className={props.className}>{props.header}</h4>
        </div>
    )
}

export default ExpenseHeader