import './App.css';
import Card from './component/CardSection/Card';
import Sidebar from './component/Sidebar/Sidebar';
import Topbar from './component/Topbar/Topbar';

function App() {
  return (
  <div className="app">
 
    <Sidebar/>
 
    {/* <!-- MAIN --> */}
    <main className="main">
    <Topbar/>
 
    <Card/>
    </main>
    </div>
  );
}

export default App;
