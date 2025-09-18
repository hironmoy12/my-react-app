import './App.css';
import Card from './component/CardSection/Card';
import Sidebar from './component/Sidebar/Sidebar';
import Topbar from './component/Topbar/Topbar';
import { Route, Routes } from 'react-router-dom';
import BuySell from './component/Buy-Sell/BuySell';
import Swap from './component/Swap/Swap';
import DetailsPage from './component/DetailsPage/DetailsPage';
import Counter from './component/Counter/Counter';
function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Topbar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/buy-sell" element={<BuySell />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
