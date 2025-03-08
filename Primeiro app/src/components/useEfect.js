import { useEffect, useState } from "react";

function Effect() {
    const [input, setInput] = useState("");
    const [tarefas, setTarefas] = useState([
        "Pagar conta de luz",
        "Estudar React JS"
    ]);

    useEffect(() => {
        const tarefaStorage = localStorage.getItem('@tarefa');
 
        if (tarefaStorage) {
         setTarefas(JSON.parse(tarefaStorage));
        }
     }, []); // Rodará sempre que 'tarefas' mudar
     

    useEffect(() => {
       localStorage.setItem('@tarefa',JSON.stringify(tarefas));
    }, [tarefas]); // Rodará sempre que 'tarefas' mudar
    

    function handleRegister(e) {
        e.preventDefault();

        if (input.trim() === "") {
            alert("Digite uma tarefa válida!");
            return;
        }

        setTarefas([...tarefas, input]);
        setInput("");
    }

    return (
        <div>
            <h1>Cadastrando Usuárioss</h1>

            <form onSubmit={handleRegister}>
                <label>Nome da Tarefa</label><br />
                <input
                    placeholder="Digite uma tarefa"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                /><br />
                <button type="submit">Registrar</button>
            </form>
            <br /><br />

            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
}

export default Effect;
