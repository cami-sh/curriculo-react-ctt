import React from 'react'

function EducationItem (prop) {

    const{instituicao, curso, periodo} = prop.itemEducacao

    return(
        <li>
            <h4>{instituicao}</h4>
            <p>{curso} - {periodo}</p>
        </li>
    )
}

export default EducationItem