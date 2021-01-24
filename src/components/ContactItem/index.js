import React from 'react'

function ContactItem (prop) {

    console.log(prop)

    const{tipo, contato} = prop.itemContato

    return (
        <li>
            <div className="item-contato">
                <h4>{tipo}</h4>
                <p>{contato}</p>
            </div>
        </li>
    )
}

export default ContactItem