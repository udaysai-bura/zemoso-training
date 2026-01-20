import {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle
} from "react";
import axiosClient from "../api/axiosClient";
import {
  Card,
  Title,
  Button,
  UserList,
  UserItem,
  UserInfo
} from "../styles";

interface User {
  id: string;
  name: string;
  email: string;
}

const Users = forwardRef((_, ref) => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await axiosClient.get<User[]>("/users");
    setUsers(res.data);
  };

  useImperativeHandle(ref, () => ({
    refresh: fetchUsers
  }));

  useEffect(() => {
    const loadUsers = async () => {
      const res = await axiosClient.get<User[]>("/users");
      setUsers(res.data);
    };

    loadUsers();
  }, []);


  const deleteUser = async (id: string) => {
    await axiosClient.delete(`/users/${id}`);
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  const patchUser = async (id: string) => {
    const email = prompt("Enter new email");
    if (!email) return;

    await axiosClient.patch(`/users/${id}`, { email });

    setUsers(prev =>
      prev.map(u => (u.id === id ? { ...u, email } : u))
    );
  };

  const putUser = async (id: string) => {
    const name = prompt("Enter new name");
    const email = prompt("Enter new email");
    if (!name || !email) return;

    await axiosClient.put(`/users/${id}`, { name, email });

    setUsers(prev =>
      prev.map(u => (u.id === id ? { ...u, name, email } : u))
    );
  };

  return (
    <Card>
      <Title>Users</Title>

      <UserList>
        {users.map(user => (
          <UserItem key={user.id}>
            <UserInfo>
              <strong>{user.name}</strong>
              <span>{user.email}</span>
            </UserInfo>

            <div>
              <Button onClick={() => patchUser(user.id)}>Update</Button>
              <Button onClick={() => putUser(user.id)}>Overwrite</Button>
              <Button danger onClick={() => deleteUser(user.id)}>
                Delete
              </Button>
            </div>
          </UserItem>
        ))}
      </UserList>
    </Card>
  );
});

export default Users;
