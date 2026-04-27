import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import type { Recipe } from "../App";

interface Props {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

const Recipes: React.FC<Props> = ({ recipes, setRecipes }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [temperature, setTemperature] = useState("");
  const [time, setTime] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRecipe: Recipe = {
      title, ingredients, temperature,
      time, instructions,
    };

    // Add new recipe to list
    setRecipes([...recipes, newRecipe]);

    // Clear form
    setTitle("");
    setIngredients("");
    setTemperature("");
    setTime("");
    setInstructions("");
  };

  return (
    <Container className="mt-4">
      <h2>Add Recipe</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mb-2"
        />

        <Form.Control
          as="textarea"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
          className="mb-2"
        />

        <Form.Control
          placeholder="Temperature"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          required
          className="mb-2"
        />

        <Form.Control
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="mb-2"
        />

        <Form.Control
          as="textarea"
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
          className="mb-2"
        />

        <Button type="submit">Add Recipe</Button>
      </Form>
    </Container>
  );
};

export default Recipes;