import { useState } from "react";
import axiosClient from "../api/axiosClient";
import { Card, Title, Input, Button } from "../styles";

interface Props {
  refreshUsers: () => void;
}

const AddUser = ({ refreshUsers }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const addUser = async () => {
    if (!name || !email) {
      alert("Name and email are required");
      return;
    }

    try {
      setLoading(true);

      await axiosClient.post("/users", { name, email });

      setName("");
      setEmail("");

      refreshUsers();
      alert("User Added");
    } catch {
      alert("Failed to add user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Title>Add User</Title>

      <Input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Button onClick={addUser} disabled={loading}>
        {loading ? "Adding..." : "Add User"}
      </Button>
    </Card>
  );
};

export default AddUser;
