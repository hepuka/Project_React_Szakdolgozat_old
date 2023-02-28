//import tools
import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

//styles
const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 40px;
  color: inherit;
  text-decoration: none;
`;
//main
const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">***KUNPAO's COFFEE MANAGEMENT SYSTEM ***</Tabs>
        <Tabs to="all"> Admin </Tabs>
        <Tabs to="add"> Új felhasználó</Tabs>
        <Tabs to="adddrink"> Új ital</Tabs>
        <Tabs to="addcoffee"> Új kávé</Tabs>
        <Tabs to="addcake"> Új sütemény</Tabs>
        <Tabs to="allproducts">Termékek</Tabs>
        <Tabs to="orders">Összes rendelés</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
