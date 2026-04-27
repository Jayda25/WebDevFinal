import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <Container className="mx-auto">
      <h2>Newsletter</h2>
      <p>Subscribe to get new recipes!</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Subscribe</Button>
      </Form>
    </Container>
  );
};

export default Newsletter;