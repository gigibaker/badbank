import 'bootstrap/dist/css/bootstrap.css'
import { React } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import CreateAccount from './components/createAccount';
import Login from './components/login';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AllData from './components/allData';
import Balance from './components/balance';
import Home from './Home';
import { UserContext } from './components/context';
import './index.css';

function Spa() {
    return (
      <HashRouter>
       <div>
         <NavBar/>
          
         <UserContext.Provider value={{users:[{name:'gia',email:'geebaker143@gmail.com',password:'secret',balance:100}]}}>
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
         </UserContext.Provider> 

         
        </div>      
      </HashRouter>
    );
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );
  
  
