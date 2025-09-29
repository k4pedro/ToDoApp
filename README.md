# 📝 To-Do List App

Uma aplicação simples e elegante de lista de tarefas desenvolvida com React, permitindo o gerenciamento completo de tarefas com persistência de dados no navegador.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Funcionalidades

- **Adicionar Tarefas**: Crie novas tarefas com título e categoria
- **Listar Tarefas**: Visualize todas as suas tarefas em uma interface amigável
- **Marcar como Concluída**: Alterne facilmente o status de conclusão das tarefas
- **Remover Tarefas**: Exclua tarefas que não são mais necessárias
- **Buscar Tarefas**: Encontre rapidamente tarefas específicas com a função de busca
- **Filtrar Tarefas**: Visualize todas as tarefas, apenas as concluídas ou apenas as pendentes
- **Ordenar Tarefas**: Organize suas tarefas em ordem alfabética crescente ou decrescente
- **Persistência de Dados**: Suas tarefas são salvas automaticamente no localStorage do navegador

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 20.19.0 ou superior)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/k4pedro/ToDoApp.git
   cd ToDoApp
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Inicie a aplicação**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 💻 Estrutura do Projeto

```
ToDoList/
├── public/           # Arquivos estáticos
├── src/              # Código fonte
│   ├── components/   # Componentes React
│   │   ├── Filter.jsx       # Componente de filtro
│   │   ├── Search.jsx       # Componente de busca
│   │   ├── Todo.jsx         # Componente de item de tarefa
│   │   └── TodoForm.jsx     # Formulário para adicionar tarefas
│   ├── App.css       # Estilos da aplicação
│   ├── App.jsx       # Componente principal
│   ├── main.jsx      # Ponto de entrada
│   └── index.css     # Estilos globais
└── README.md         # Documentação
```

## 🤔 Decisões Técnicas

- **React + Vite**: Escolhidos pela velocidade de desenvolvimento e experiência de usuário fluida
- **Componentes Modulares**: Separação clara de responsabilidades para facilitar manutenção
- **Hooks do React**: Uso de `useState` e `useEffect` para gerenciamento de estado e efeitos
- **localStorage**: Implementado para persistência de dados sem necessidade de backend
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- **Estilização com CSS**: Uso de CSS moderno com variáveis e flexbox

## 💡 Lógica de Implementação

### Componente Principal (App.jsx)

- **Gerenciamento de Estado**: Utiliza múltiplos estados com `useState` para controlar tarefas, filtros, busca e ordenação
- **Persistência com localStorage**: 
  ```jsx
  // Inicialização do estado com dados do localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  // Salva automaticamente no localStorage quando o estado muda
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  ```

- **Manipulação de Tarefas**:
  - `addTodo`: Adiciona uma nova tarefa com ID aleatório e status inicial não-completado
  - `removeTodo`: Remove uma tarefa com base no ID usando filter
  - `completeTodo`: Alterna o status de conclusão de uma tarefa com base no ID

- **Filtros Encadeados**: Utiliza múltiplos métodos de array encadeados para filtrar, ordenar e renderizar as tarefas
  ```jsx
  {todos
    // Filtro por status (todas/completas/incompletas)
    .filter((todo) => filter === 'All' ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted)
    // Filtro por texto de busca
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
    // Ordenação alfabética (ascendente/descendente)
    .sort((a, b) => sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
    // Renderização dos componentes
    .map((todo) => (/* Componente Todo */))}
  ```

### Componentes Secundários

- **TodoForm**: 
  - Implementa estado local para controlar inputs do formulário
  - Validação básica para evitar submissão de campos vazios
  - Limpa os campos após submissão bem-sucedida

- **Todo**: 
  - Componente de apresentação que recebe props do componente pai
  - Styling condicional baseado no status de conclusão da tarefa
  - Gerencia interações do usuário via callbacks (completeTodo, removeTodo)

- **Search**: 
  - Implementa busca em tempo real que filtra as tarefas enquanto o usuário digita
  - Utiliza controlled inputs para manter sincronia com o estado principal

- **Filter**:
  - Fornece seleção de filtros por status (todas, completas, incompletas)
  - Implementa ordenação alfabética em ordem crescente ou decrescente

## ⚠️ Limitações Conhecidas

- **Persistência Local**: Os dados são salvos apenas no navegador local do usuário
- **Sem Sincronização**: Não há sincronização entre dispositivos diferentes
- **Capacidade Limitada**: O localStorage tem limite de armazenamento (aproximadamente 5MB)
- **Sem Backup**: Se o usuário limpar os dados do navegador, todas as tarefas serão perdidas

## 🔮 Próximos Passos

### Melhorias Planejadas

1. **Funcionalidade de Edição de Tarefas**:
   - Implementar um modo de edição para modificar tarefas existentes

2. **Validações Aprimoradas**:
   - Implementar validação de entrada mais robusta
   - Adicionar mensagens de erro amigáveis
   - Prevenir duplicação de tarefas com o mesmo nome

3. **Experiência de Usuário**:
   - Adicionar animações de transição para ações de CRUD
   - Implementar tema claro/escuro com alternância

### Expansões Técnicas

1. **Deploy em Produção**:
   - Configurar CI/CD com GitHub Actions
   - Realizar deploy

2. **Expansão para Fullstack**:
   - Criar backend com Node.js
   - Migrar de localStorage para um banco de dados

3. **Recursos Adicionais**:
   - Sistema de prioridades para tarefas
   - Notificações para tarefas com prazos
