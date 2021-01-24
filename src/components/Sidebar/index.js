import React from 'react'
import Contact from "../Contact"
import Education from "../Education"

function SideBar (prop) {

    const{contatos, educacao} = prop.dados

    return (
        <aside>
          
          <Contact dadosContato = {contatos}/>

          <Education dadosEducacao = {educacao}/>


      </aside>
    )
}

export default SideBar