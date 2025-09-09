import './App.css';
import Card from './component/CardSection/Card';
import Sidebar from './component/Sidebar/Sidebar';
import Topbar from './component/Topbar/Topbar';
import {NewBox} from './component/CardSection/Card';
import { Route, Routes } from 'react-router-dom';
import BuySell from './component/Buy-Sell/BuySell';
function App() {
  return (
  <div className="app">
  <Routes>
    <Route path='buy-sell' element={<BuySell />} />
  </Routes>


    <Sidebar/>
    <main className="main">
    <Topbar/>
 
    <Card/>
    <NewBox/>
    </main> 
   
    </div>
  );
}

export default App;
