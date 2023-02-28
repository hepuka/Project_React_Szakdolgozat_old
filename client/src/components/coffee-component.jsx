import React from "react";
import { useState, useEffect } from "react";
import { getCoffees } from "../service/api.js";

import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import { lime } from "@mui/material/colors";

const CoffeProducts = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    getAllCoffees();
  }, []);

  const getAllCoffees = async () => {
    let response = await getCoffees();
    console.log(response.data);
    setCoffees(response.data);
  };

  console.log(coffees);
  return (
    <div>
      <Typography variant="h5">Kávék</Typography>

      {coffees.map((coffee) => {
        return (
          <Card key={coffee._id} sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: lime[900] }} aria-label="recipe">
                  KP
                </Avatar>
              }
              title="KUNPAO'S COFFEE"
              subheader={new Date().getFullYear()}
            />
            <CardMedia
              component="img"
              height="194"
              image="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="picture"
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Kunpao's Coffee - Kávéital
              </Typography>
              <Typography variant="h5">{coffee.name}</Typography>
              <Typography variant="h36">{coffee.packaging}</Typography>
              <Typography variant="h36">{coffee.price}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default CoffeProducts;
