import { useState } from "react";

function Nome({aluno, idade}) {
  const [constAluno, setAluno] = useState(aluno);
  const [constIdade, setIdade] = useState(idade);

  function handleChange(nome,idade) {    
    setAluno(nome);
    setIdade(idade);
  }
  
    return (
    <div>
      <h1>Componentes</h1>
      <span>Bem vindo: {constAluno} - Idade: {constIdade} anos</span><br />

      <button onClick={()=> handleChange('Davi',25)}>Mudar nome</button>
      <br />
      <br />
    </div>
    )
  }

  export default Nome;