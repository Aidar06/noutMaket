import './App.scss';
import Header from "./components/Header/header";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import Detail from "./components/Detail/detail";
import Like from "./components/Like/like";
import About from "./components/Detail/About/about";


function App() {
  return (
    <div className='App'>
        <Header/>
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/detail/:id'} element={<Detail/>}/>
            <Route path={'/like'} element={<Like/>}/>
            <Route path={'/about'} element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
