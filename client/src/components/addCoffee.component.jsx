import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCoffee } from "../service/api";

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
  packaging: "",
  price: 0,
};

const AddCoffee = () => {
  const [coffee, setCoffee] = useState(templateUser);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setCoffee({ ...coffee, [e.target.name]: e.target.value });
  };

  const addCoffeeDetails = async () => {
    await addCoffee(coffee);
    navigate("/allproducts");
  };

  return (
    <Container>
      <Typography variant="h5">Új kávé hozzáadása</Typography>

      <FormControl>
        <InputLabel>Név</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>

      <FormControl>
        <InputLabel>KIszerelés</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="packaging" />
      </FormControl>

      <FormControl>
        <InputLabel>Ár</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="price" />
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={() => addCoffeeDetails()}>
          Hozzáad
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddCoffee;
