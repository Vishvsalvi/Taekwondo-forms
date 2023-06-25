import RegisterationForm from "./Components/RegisterationForm";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Error from "./Components/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    // <div>
    //   <EventPage/>
    //  <RegisterationForm/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route index element={<RegisterationForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
