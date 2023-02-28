import { postDrink, postCoffee, postCake } from "../schema/ital-schema.js";
// import { postCoffee } from "../schema/coffee-schema.js";
// import postCake from "../schema/cake-schema.js";

export const addDrink = async (req, res) => {
  const drink = req.body;

  const newDrink = new postDrink(drink);

  try {
    await newDrink.save();
    res.status(201).json(newDrink);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const addCoffee = async (req, res) => {
  const coffee = req.body;

  const newCoffee = new postCoffee(coffee);

  try {
    await newCoffee.save();
    res.status(201).json(newCoffee);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getDrinks = async (req, res) => {
  try {
    const drinks = await postDrink.find();
    res.status(200).json(drinks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCoffees = async (req, res) => {
  try {
    const coffees = await postCoffee.find();
    res.status(200).json(coffees);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCakes = async (req, res) => {
  try {
    const cakes = await postCake.find();
    res.status(200).json(cakes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addCake = async (req, res) => {
  const cake = req.body;

  const newCake = new postCake(cake);

  try {
    await newCake.save();
    res.status(201).json(newCake);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
