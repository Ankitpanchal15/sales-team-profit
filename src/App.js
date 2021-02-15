import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './component/sidebar/Sidebar';
import Main from './component/Main';

import { BrowserRouter as Router  } from "react-router-dom";


function App() {
  return (
    <>
      <div className="wrapper">
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Sidebar />
        <Main />
      </Router>
      </div>

    </>
  );
}

export default App;
