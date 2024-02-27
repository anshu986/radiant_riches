import './App.css';
import Header from './components/Header/Header';
import Submenu from './components/Submenu/Submenu';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Data } from './Data';
import { Dealdata } from './Dealdata';
import DealCard from './components/DealCard/DealCard';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <>
     <Header/>
    <div className="App">
      <h1>Best Website builders in the US</h1>
      <hr />
      <div className='date'>
        <div className='subdate'>
        <p>
        <IoCheckmarkDoneCircleOutline className='size'/>
        Last Updated - 
        February 22, 2020</p>
        <p>
        <IoInformationCircleOutline className='size' />
        Advertising Disclosure</p>
        </div>
        <div>Top Relevant  <KeyboardArrowDownIcon className='downicon'/></div>
      </div>
      <hr />
      <Submenu/>
      {Data.sort((a, b) => b.rating - a.rating).map((d) => {
        return(
          <Cards 
        id={d.id}
        name={d.name}
        description={d.description}
        highlights={d.highlights}
        pointersHighlights={d.pointersHighlights}
        features={d.features}
        rating={d.rating}
        comment={d.comment}
        star={d.star}
        />
        )
        
      })}
      <h2 className='deals_heading'>Related deals you might like for</h2>
      <div className='cardsdeal'>
      {
        Dealdata.map((item)=>{
          return(
            <DealCard
              name={item.name}
              discount={item.discount}
              description={item.description}
              price={item.price}
              cost={item.cost}
              off={item.off}
            />
          )
        })
      }
      </div>
    <Signup/>
    </div>
    <Footer/>
    </>
 
  );
}

export default App;
