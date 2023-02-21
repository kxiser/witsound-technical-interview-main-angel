import "./App.css";
import CreateUserForm from "./components/CreateUserForm"
import TableUsers from "./components/TableUsers"
import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('')
  const [isSending, setIsSending] = useState(false)

  const onChangeName = (event: any) => {
    setName(event.target.value);
  };
  const sendForm = async(event: { preventDefault: () => void; }) => {
    if (name != null) {
      event.preventDefault();
      setIsSending(true)
      await createUser()
      setName("");
    }
  };
  const createUser = async () => {
    if (name != null && name != "") {
      const responseCreateUser = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name })
      });
      const content = await responseCreateUser.json();
      setMessage(content)
    }
  }
  const getUsers = async () => {
    const response_users = await fetch('http://localhost:3000/getAll');
    const usersList = await response_users.json();
    setUsers(usersList)
  }
  useEffect(() => {
    if (isSending) {
      getUsers()
      setIsSending(false)
    }
  }, [isSending])


  return (
    <div className="App">
      <h1>User management</h1>
      <CreateUserForm 
              onChangeName={onChangeName}
              name={name}
              sendForm={sendForm}
      />
      <TableUsers users={users} />
    </div>
  );
}

export default App;


