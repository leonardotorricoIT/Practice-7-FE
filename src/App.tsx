import UserCard from "./components/UserCard";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  const sayHello = (name: string) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <>
      <h1>User Cards</h1>
      <UserCard name="John Doe" age={30} onClick={sayHello} />
      <UserCard name="Jane Smith" age={25} onClick={sayHello} />
      <h1>Code-Refactor</h1>
      <UserList />
    </>
  );
}

export default App;
