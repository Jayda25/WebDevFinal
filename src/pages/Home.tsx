import React from "react";
import { Container, Accordion } from "react-bootstrap";
import type { Recipe } from "../App";

interface Props {
  recipes: Recipe[];
}

const Home: React.FC<Props> = ({ recipes }) => {
  return (
    <Container className="mt-4">
      <h1>Welcome to a Mix of Yum!</h1>
      <h3>Discover and share your favorite recipes!</h3>
      
      <p>Here you can find and add simple recipes to share with the world.</p>

      <Accordion>
        {recipes.map((r, i) => (
          <Accordion.Item eventKey={i.toString()} key={i}>
            <Accordion.Header>{r.title}</Accordion.Header>
            <Accordion.Body>
              <p><b>Ingredients:</b> {r.ingredients}</p>
              <p><b>Temperature:</b> {r.temperature}</p>
              <p><b>Time:</b> {r.time}</p>
              <p><b>Instructions:</b> {r.instructions}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <p>Subscribe to our Newsletter to get new recipies weekly!</p>
    </Container>
  );
};

export default Home;