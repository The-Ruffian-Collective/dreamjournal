import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './header';
import MainContentArea from './MainContentArea';
import PromptArea from './PromptArea';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

function App() {
  const prompts = [
    { id: 1, text: "Explore the symbol of the dreamcatcher" },
    { id: 2, text: "Reflect on the theme of your dreams" },
    { id: 3, text: "Write down a personal reflection on the meaning of your dreams" }
  ];

  return (
    <Provider store={store}>
      <Container>
        <Header />
        <MainContentArea />
        <PromptArea prompts={prompts} />
        <Footer />
      </Container>
    </Provider>
  );
}

export default App;
