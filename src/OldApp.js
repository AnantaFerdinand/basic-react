// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Hello from './components/Hello';
// import Content from './components/Content';
// import Cards from './components/Cards';
import Counter from './components/Counter';
// import { person } from './utils/person';



function App() {
return(
  <>
  {/* {person.map ((item) => {
    return(
        <Cards
        name={item.name}
        institution={item.institution}
        address={item.address}
        phoneNumber={item.phoneNumber}
        />
      );
    })} */}
    <Counter title="Counter Component"/>
    
  </>
 );
};
export default App;