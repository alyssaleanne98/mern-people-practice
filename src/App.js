import './App.css';
// imports the styles from app.css file
import Header from "./components/Header"
import Main from "./components/Main"
// import the Header and Main components 



//The main component of our application called "App"
function App() {
  // The return statement below defines what our component should display.
  // It's like saying "When someone uses this `App`component, show this content."
  return (
    <div className="App">
      
     <Header />
     <Main /> 

    </div>
  );
}

export default App;
