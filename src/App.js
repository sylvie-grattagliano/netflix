import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import narcos from "./assets/narcos.jpg";

function App() {
  // je créée des variables menu sous forme de tableau parceque sur mon site ul et li
  const menu1 = [
    "Audio et sous-titres",
    "Presse",
    "Confidentialité",
    "Nous contacter",
  ];
  const menu2 = [
    "Autodescription",
    "Relations investisseurs ",
    "Informations légales",
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* je rappelle la variable dans footer  */}
      <Footer menu1={menu1} menu2={menu2} />
    </div>
  );
}

export default App;
