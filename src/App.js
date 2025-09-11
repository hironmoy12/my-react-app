import './App.css';
import Card from './component/CardSection/Card';
import Sidebar from './component/Sidebar/Sidebar';
import Topbar from './component/Topbar/Topbar';
import {NewBox} from './component/CardSection/Card';
import { Route, Routes } from 'react-router-dom';
import BuySell from './component/Buy-Sell/BuySell';
import Swap from './component/Swap/Swap';
function App() {
  return (
  <div className="app">
  


    <Sidebar/>
    <main className="main">
    <Topbar/>
 <Routes>
    <Route path='buy-sell' element={<BuySell />} />
    <Route path='swap' element={<Swap />} />
  </Routes>
    <Card/>
    <NewBox/>
    </main> 
   
    </div>
  );
}

export default App;
