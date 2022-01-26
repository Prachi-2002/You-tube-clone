import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import RecommendedVideo from './RecommendedVideo';
import { BrowserRouter} from "react-router-dom";
import { Routes, Route,  } from "react-router-dom";
import SearchPage from './SearchPage';
function Compo(){
  return (
    <div className='app-page'>
    <Sidebar />
    <RecommendedVideo />
  </div>
  )
}
function Compo1(){
  return (
    <div className='app-page'>
     <Sidebar />
     <SearchPage />
  </div>
  )
}
function App() {
  return (
    <div className='app'>
    {/* <h1>Hello , Lets Build Youtube Clone 🚀</h1> */}
    {/* header  1 component
    sidebar   2 component
    REcommended Video  3 component */}
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Compo />}> 
      </Route>
      <Route path="/search/:searchTerm" element={<Compo1/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
