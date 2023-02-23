
import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario/Formulario';
import { useState } from 'react'
import Time from './Componentes/Time/Time';
import Rodape from './Componentes/Rodape/Rodape';


function App() {

  const times = [
    {
      nome: "Programacao",
      corPrimaria: "#d9f7e9",
      corSecundaria: "#57c278"
    },
    {
      nome: "Front-End",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff"
    },
    {
      nome: "Data Science",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2"
    },
    {
      nome: "Devops",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8"
    },
    {
      nome: "UX e Design",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5"
    },
    {
      nome: "Mobile",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9"
    },
    {
      nome: "Inovacao e Gestao",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf"
    }

  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time
        key={time.nome }
        nome={time.nome}
        corPrimaria ={time.corPrimaria}
        corSecundaria= {time.corSecundaria}
        colaboradores ={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
        <Rodape/>
      


    </div>
  )
}

export default App;
