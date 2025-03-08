import { useState } from "react";

function Formulario() {
  const [nome, setnome] = useState("");
  const [email, setemail] = useState("");
  const [idade, setidade] = useState("");

  const [user, setUser] = useState({});

  function handleRegister(e){
    e.preventDefault();
    
    setUser({
      nome: nome,
      email: email,
      idade: idade,      
    });
  }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <label htmlFor="">Nome:</label>
        <br />
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => {
            setnome(e.target.value);
          }}
        />
        <br />

        <label htmlFor="">Email:</label>
        <br />
        <input
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <br />

        <label htmlFor="">Idade:</label>
        <br />
        <input
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => {
            setidade(e.target.value);
          }}
        />
        <br />

        <button type="subimt">Registrar</button>
      </form>

      <br />
      <br />

      <span>Bem vindo: {user.nome}</span>
      <br />
      <span>Idade: {user.idade}</span>
      <br />
      <span>Email: {user.email}</span>
      <br />
    </div>
  );
}

export default Formulario;
