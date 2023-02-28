import React from "react";
import { useState, useEffect } from "react";
import { getDrinks } from "../service/api.js";
import menu2 from "../img/menu2.jpg";

import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import { lime } from "@mui/material/colors";

const Products = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getAllDrinks();
  }, [setDrinks]);

  const getAllDrinks = async () => {
    let response = await getDrinks();
    console.log(response.data);
    setDrinks(response.data);
  };

  console.log(drinks);

  return (
    <div>
      <Typography variant="h5">Italok</Typography>
      {drinks.map((ital) => {
        if (ital.type === "drink") {
          return (
            <Card key={ital._id} sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: lime[900] }} aria-label="recipe">
                    KP
                  </Avatar>
                }
                title="KUNPAO'S COFFEE"
                subheader={new Date().getFullYear()}
              />
              <CardMedia component="img" height="194" image={menu2} />
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Kunpao's Coffee - Kávéital
                </Typography>
                <Typography variant="h5">{ital.name}</Typography>
                <Typography variant="h36">{ital.packaging}</Typography>
                <Typography variant="h36">{ital.price}</Typography>
              </CardContent>
            </Card>
          );
        }
      })}

      <Typography variant="h5">Kávék</Typography>

      {drinks.map((ital) => {
        if (ital.type === "coffee") {
          return (
            <Card key={ital._id} sx={{ maxWidth: 345 }}>
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
                <Typography variant="h5">{ital.name}</Typography>
                <Typography variant="h36">{ital.packaging}</Typography>
                <Typography variant="h36">{ital.price}</Typography>
              </CardContent>
            </Card>
          );
        }
      })}

      <Typography variant="h5">Sütemények</Typography>
      {drinks.map((ital) => {
        if (ital.type === "cake") {
          return (
            <Card key={ital._id} sx={{ maxWidth: 345 }}>
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
                <Typography variant="h5">{ital.name}</Typography>
                <Typography variant="h36">{ital.packaging}</Typography>
                <Typography variant="h36">{ital.price}</Typography>
              </CardContent>
            </Card>
          );
        }
      })}
    </div>
  );
};

export default Products;
