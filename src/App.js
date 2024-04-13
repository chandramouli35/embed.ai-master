
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Content from './components/Content';
import LeftSidebar from './components/LeftSideBar'
import Chat from './components/Chat';
import CreateCharacter from './components/CreateCharacter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <LeftSidebar />
          <Routes>
            <Route path='/' element = {<Content />} />
            <Route path='/chat' element = {<Chat />} />
            <Route path="/Content" element={<Content/>}/>
            <Route path='/create-character' element = {<CreateCharacter />} />
          </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
