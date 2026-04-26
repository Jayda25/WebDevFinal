import React from "react";
import { Container } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <Container className="mx-auto">
      <h1>Welcome to a Mix of Yum!</h1>
      <h3>Discover and share your favorite recipes!</h3>
      
      <p>Here you can find and add simple recipes to share with the world.</p>

      <footer><p>Subscribe to our Newsletter to get new recipies weekly!</p></footer>

    </Container>
  );
};

export default Home;