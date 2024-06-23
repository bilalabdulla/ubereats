import './App.css';
import CardList from './components/CardList';
import Cities from './components/Cities';
import Countries from './components/Countries';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderFull from './components/HeaderFull';
import Navbar from './components/Navbar';
import NavbarTwo from './components/NavbarTwo';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <NavbarTwo />
      <HeaderFull />
      <CardList />
      <Cities />
      <Countries />
      <Footer />
    </div>
  );
}

export default App;
