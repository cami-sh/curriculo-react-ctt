import React from 'react'
import ExperienceItem from "../ExperienceItem"

function Experience (prop) {

    const{experiencia} = prop.dados

    return (
        <div className="experience">
            <h2>Experiência Profissional</h2>

            {experiencia.map(item => (
                <ExperienceItem key={item.id} experience={item}/>
            ))}
        </div>
    )
}

export default Experience