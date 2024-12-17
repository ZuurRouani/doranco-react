import './App.css';
import { Header } from './component/Header/Header.jsx';
import { Footer } from './component/Footer/Footer.jsx';
import { Bouton } from './component/Bouton/Bouton.jsx';
import { Player } from './component/Player/player.jsx';

import {User} from  "./userexo/user.jsx";
import "./index.css";
// Un composant React
function App() {


  return (
    <>
      <div>
        <Header />
        <Bouton  couleur={'green'}>
          <img src='data:image/jv'/>
          <p>Ajouter</p>
          </Bouton>

          <Bouton couleur={'red'}>
            <p>Supprimer</p>
          </Bouton>

        <User />
        <Player />
        <Footer />
      </div>
    </>
  );
}

export default App;

