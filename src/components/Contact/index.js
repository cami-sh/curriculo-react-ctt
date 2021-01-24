import React, { useState } from 'react'
import ContactItem from "../ContactItem"

function Contact (prop) {

    const[infoContato, alteraInfo] = useState(false)

    const mostraContato = () => {
        alteraInfo(true)
    }

    return (
        <div className="sidebar">
            <h3>Contatos</h3>

            <button onClick={mostraContato}>Mostrar Contatos</button>

                {infoContato && 
                    (<div className="lista-de-contatos">
                        {prop.dadosContato.map(item => (<ContactItem key={item.id} itemContato={item}/>))}
                        </div>)
                }

        </div>
    )
}

export default Contact