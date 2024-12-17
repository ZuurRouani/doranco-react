import './App.css';
import { Header } from './component/Header/Header.jsx';
import { Footer } from './component/Footer/Footer.jsx';
import { Bouton } from './component/Bouton/Bouton.jsx';
import {User} from  "./userexo/user.jsx";

// Un composant React
function App() {


  return (
    <>
      <div>
        <Header />
        <Bouton />
        <User />
        <Footer />
      </div>
    </>
  );
}

export default App;

