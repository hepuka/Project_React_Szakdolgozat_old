import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";

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
  width: 30%;
  margin: 10% auto 0 auto;
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

const AddUser = () => {
  const [user, setUser] = useState(templateUser);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);

    //ezzel adjuk meg, hogy az add gombra kattintva rögtön át is ugrik az All User oldalra
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h5">Új felhasználó hozzáadása</Typography>

      <FormControl>
        <InputLabel>Név</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>

      <FormControl>
        <InputLabel>Felhasználónév</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>

      <FormControl>
        <InputLabel>Jogosultság</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="role" />
      </FormControl>

      <FormControl>
        <InputLabel>Jelszó</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="password" />
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Hozzáad
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
