
import './index.css';
import Navbar from './Pages/Navbar';
import UsersPage from './Pages/UsersPage';
import User from './Pages/user/User';
import AddUser from './Pages/user/AddUser';
import EditUser from './Pages/user/EditUser';
import { BrowserRouter, Route, browserHistory, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar />


      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route exact path="/users/:id" element={<User />} />
        <Route exact path="/users/add" element={<AddUser />} />
        <Route exact path="/users/update/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
