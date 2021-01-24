import React from 'react'

function Header (prop) {

    const {foto, nome, ocupacao, resumo, perfilProfissional} = prop.dados

    return (
        <>
            <div className="perfil">
                <img src={foto} alt={nome} />
            </div>
            <div className="biografia">
                <h1>
                    {nome}
                </h1>
                <div className="ocupacao">{ocupacao}</div>
                <p>{resumo}</p>
            </div>

            <div className="titulo">
                Perfil <br /> Profissional
            </div>

            <div className="perfil-profissional">
                <p>
                    {perfilProfissional}
                </p>
            </div>
        </>
    )
}

export default Header