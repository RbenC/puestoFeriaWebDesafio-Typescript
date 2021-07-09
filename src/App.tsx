import './App.css';
import Welcome from './containers/Welcome'; 
import ProductList from './components/productos/ProductList'; 

function App() {
  return (
    <div className=" container App"> 
      <Welcome welcomeTitle="Bienvenidxs" />
      <ProductList/>
    </div>
    
  );
}

export default App;
