import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUser } from "../service/api";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 25px;
  }
`;

const templateUser = {
  name: "",
  username: "",
  email: "",
  role: "",
  password: "",
};

const EditUser = () => {
  const [user, setUser] = useState(templateUser);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/all");
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Typography variant="h4">Adatok módosítása</Typography>

      <FormControl>
        <InputLabel>Név</InputLabel>

        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>

      <FormControl>
        <InputLabel>Felhasználónév</InputLabel>

        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={user.username}
        />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>

        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>

      <FormControl>
        <InputLabel>Jogosultság</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="role"
          value={user.role}
        />
      </FormControl>

      <FormControl>
        <InputLabel>Jelszó</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="password"
          value={user.password}
        />
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>
          Módosít
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
