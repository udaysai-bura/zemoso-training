// npx json-server --watch db.json --port 3001
import { useRef } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

const App = () => {
  const usersRef = useRef<{ refresh: () => void }>(null);

  return (
    <>
      <AddUser refreshUsers={() => usersRef.current?.refresh()} />
      <Users ref={usersRef} />
    </>
  );
};

export default App;
