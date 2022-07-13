import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
