
import './index.css';
import Navbar from './Pages/Navbar';
import UsersPage from './Pages/UsersPage';
import HomePage from './Pages/HomePage';
import User from './user/User';
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import { BrowserRouter, Route, browserHistory, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar />


      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route exact path="/users/:id" element={<User />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/users/add" element={<AddUser />} />
        <Route exact path="/users/update/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
