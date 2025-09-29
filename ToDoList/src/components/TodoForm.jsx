import {useState} from 'react'

function TodoForm({addTodo}) {
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category) return;
        addTodo(value, category);
        setValue('');
        setCategory('');
    };

  return (
    <div>
        <h2>Adicionar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Digite o título'
            value={value}
            onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma Categoria</option>
                <option value="trabalho">Trabalho</option>
                <option value="escola">Escola</option>
                <option value="faculdade">Faculdade</option>
                <option value="outros">Outros</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm