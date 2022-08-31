import './App.css';
import Testimonial from './components/Testimonial'

function App() {
  return (
    <div className="App">
      <main className="principal-container">
        <h1>Esto es lo que dicen nuestros alumnos sobre FrreCodeCamp: </h1>
        <Testimonial/>
      </main>    
    </div>
  );
}

export default App;
