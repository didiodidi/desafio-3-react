import React,{Component} from "react";
import "./style.css";

//Components
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

class App extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <div className="container"> 
          <div className="sitio-aviso">
            <ItemListContainer text="Bienvenidos"/>
            <ItemListContainer text2="Este sitio se encuentra en construcción....."/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
