import './App.css';

import AllRoutes from './Routes/AllRoutes';
import Homepage from './Pages/Homepage';
import Signup from './Pages/Signup';
import AdminPanel from './Components/Admin/AdNavbar';
function App() {
  return (
    <div className='App'>
      <AllRoutes />
      <AdminPanel />
      <Homepage/>
      <Signup/>
    </div>
  );
}

export default App;