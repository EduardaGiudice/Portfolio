import './App.css';
import Contato from './components/Contato/Contato';
import Experiencia from './components/Experiencia/Experiencia';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projeto from './components/Projeto/Projeto';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Sobre from './components/Sobre/Sobre';
import Tecnologias from './components/Tecnologias/Tecnologias';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Sobre />
        <Tecnologias />
        <Experiencia />
        <Projeto/>
        <Contato />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
