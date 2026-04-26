import React from "react";
import { Container } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <Container className="mt-4">
      <h2>About</h2>
      <p>Hello! My name is Jayda and this is a simple recipe blog that I have made
        for my Web Development 2 class. 
        This application is my final project, however I have always dreamed about having 
        a blog. This was truly a fun project to make. I believe having this experience 
        well help me one day build a real blog.
      </p>
    </Container>
  );
};

export default About;