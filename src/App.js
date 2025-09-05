import './App.css';
import Card from './component/CardSection/Card';
import Sidebar from './component/Sidebar/Sidebar';
import Topbar from './component/Topbar/Topbar';
import {NewBox} from './component/CardSection/Card';
function App() {
  return (
  <div className="app">
 
    <Sidebar/>
 
    {/* <!-- MAIN --> */}
    <main className="main">
    <Topbar/>
 
    <Card/>
    <NewBox/>
    </main> 
   
    </div>
  );
}

export default App;
