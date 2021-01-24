import React from 'react'
import EducationItem from "../EducationItem"

function Education (prop) {

    return(
        <div className="sidebar">
            <h3>Educação</h3>
            <div className="lista-de-formacao">
                {prop.dadosEducacao.map(item => (
                    <EducationItem key={item.id} itemEducacao={item}/>
                ))}
            </div>
        </div>
    )
}

export default Education