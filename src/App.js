import RegisterationForm from './Components/RegisterationForm';
import './App.css';
import EventPage from './Components/EventPage';
import Poomsae from './Components/Poomsae';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Error from './Components/Error';

function App() {
  return (
    // <div>
    //   <EventPage/>
    //  <RegisterationForm/>
    // </div>
    <BrowserRouter>
    <Routes>
        <Route index element={<EventPage />} />
        <Route path="/competition/" element={<RegisterationForm/>} />
        <Route path="/poomsae/" element={<Poomsae/>} />
        <Route path="*" element={<Error/>}  />
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
