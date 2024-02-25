import './App.css';
import Header from './components/Header';
import Submenu from './components/Submenu';
import Cards from './components/Cards';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";

function App() {
  return (
    <>
     <Header/>
    <div className="App">
      <h1>Best Website builders in the US</h1>
      <hr />
      <div className='date'>
        <p>
        <IoCheckmarkDoneCircleOutline className='size'/>
        Last Updated - 
        February 22, 2020</p>
        <p>
        <IoInformationCircleOutline className='size' />
        Advertising Disclosure</p>
      </div>
      <hr />
      <Submenu/>
      <Cards/>
    </div>
    </>
 
  );
}

export default App;
