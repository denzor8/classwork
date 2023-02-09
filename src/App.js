import React from "react";
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import Header from './components/Header/Header';
function App() {
  let users = [
    {
      name: 'Jonh',
      lastName: 'Tom',
      age: 20,
      id: Date.now()
    }]
  return (
    <>
      <Header/>
      <Section users={ users}/>
      <Footer />
    </>
  );
}

export default App;
