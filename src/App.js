import React, { useState } from "react";
import "./App.css"
import Header from "./components/Header"
import SideBar from "./components/Sidebar"
import Experience from "./components/Experience"


function App() {

  const fakeAPI =  {
      nome: 'Camila Sayuri',
      ocupacao: 'Estudante de React',
      resumo: '"Apaixonada por dogs e livros! Me chama para aprender novas coreografias ;)"',
      perfilProfissional: 'Conheci o Marketing através da Empresa Júnior e atualmente trabalho na área. Depois de participar de Hackathons e outros eventos, me interessei por Front e UX Design, por isso estou me aventurando e estudando mais.',
      foto: 'https://media-exp1.licdn.com/dms/image/C4D03AQHHnPT1G8b8AQ/profile-displayphoto-shrink_800_800/0/1585242586238?e=1616630400&v=beta&t=LPtDSaW6F58C_pccsEELPJV64vIuhvbJU2amtiAw_n8',
      contatos: [
        {
          id: 1,
          tipo: 'telefone',
          contato: '11 95556-0620'
        },
        {
          id: 2,
          tipo: 'email',
          contato: 'camilahanazono@gmail.com'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'Unicamp (Universidade Estadual de Campinas)',
          curso: 'Matemática Aplicada e Computacional',
          periodo: '2016-2020'
        },
        {
          id: 2,
          instituicao: 'Colégio Interviva',
          curso: 'Ensino Médio',
          periodo: '2013-2015'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Front - React',
          periodo: 'Janeiro/2020 - Março/2020',
          empresa: 'Campinas Tech Talents',
          local: 'Online',
          conteudo: 'Programa de formação e qualificação profissional de novos desenvolvedores. Na trilha apoiada pela empresa AB InBev, o aprendizado é aplicado em projetos toda semana.'
        },
        {
          id: 2,
          cargo: 'Assistente de Growth Hacker',
          periodo: 'Julho/2020 - o momento',
          empresa: 'Escola EDTI',
          local: 'Campinas-SP',
          conteudo: 'Sou responsável pelas estratégias de conteúdo e redes sociais para captação de novos leads. Acompanho alguns indicadores da área e trabalho com e-mail marketing para aumento da conversão.'
        }
      ]
  }

  const [resposta] = useState (fakeAPI)

  return (
    <main>

      <Header dados={resposta}/>

      <SideBar dados={resposta}/>

      <Experience dados={resposta}/>

    </main>
  );
}

export default App;