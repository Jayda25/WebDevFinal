import React, { useState } from "react";
import { Container, Form, Button, Accordion } from "react-bootstrap";

interface Recipe {
  title: string;
  ingredients: string;
  temperature: string;
  time: string;
  instructions: string;
}

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [title, setTitle] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [temperature, setTemperature] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRecipe: Recipe = {
      title,
      ingredients,
      temperature,
      time,
      instructions,
    };

    setRecipes([...recipes, newRecipe]);
    setTitle("");
    setIngredients("");
    setTemperature("");
    setTime("");
    setInstructions("");
  };
    return (
        <Container className="py-4 px-3 mx-auto">
        <h2>Add a Recipe</h2>

        <Form onSubmit={handleSubmit} className="mb-4">
            <Form.Group className="mb-3">
            <Form.Label>Recipe Title</Form.Label>
            <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
                as="textarea"
                rows={3}
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
            />
            </Form.Group>
            <Form.Group className="mb-3">
          <Form.Label>Cooking Temperature</Form.Label>
          <Form.Control
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="e.g., 350°F / 180°C"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cooking Time</Form.Label>
          <Form.Control
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="e.g., 30 minutes"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit">Add Recipe</Button>
      </Form>

      <h2>Recipes</h2>

      <Accordion>
        {recipes.map((recipe, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{recipe.title}</Accordion.Header>
            <Accordion.Body>
              <strong>Ingredients:</strong>
              <p>{recipe.ingredients}</p>

              <strong>Cooking Temperature:</strong>
              <p>{recipe.temperature}</p>

              <strong>Cooking Time:</strong>
              <p>{recipe.time}</p>

              <strong>Instructions:</strong>
              <p>{recipe.instructions}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default Recipes;