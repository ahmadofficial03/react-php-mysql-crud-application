import { BrowserRouter as Router, Routes, Route, Link } 
from 'react-router-dom';

import CreateUsers from './components/CreateUsers';
import ListUsers from './components/ListUsers';
import EditUsers from './components/EditUsers';

import './App.css';

function App() {
  return (
    <div className="App">
     <h1>React, PHP |Crud Application</h1>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">List Users</Link>
          </li>
          <li>
            <Link to="user/create">Create Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<ListUsers />} />
        <Route path='user/create' element={<CreateUsers />} />
        <Route path='user/:id/edit' element={<EditUsers />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
