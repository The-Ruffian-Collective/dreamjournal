import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function PromptArea() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    // Placeholder data for AI-powered prompts
    setPrompts([
      { id: 1, text: "Explore the symbol of the dreamcatcher" },
      { id: 2, text: "Reflect on the theme of your dreams" },
      { id: 3, text: "Write down a personal reflection on the meaning of your dreams" }
    ]);
  }, []);

  return (
    <div>
      <h4>Prompts</h4>
      <ul>
        {prompts.map((prompt) => (
          <li key={prompt.id}>
            <Card>
              <Card.Body>
                <Card.Title>{prompt.text}</Card.Title>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PromptArea;
