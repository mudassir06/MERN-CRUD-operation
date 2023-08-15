import {BrowserRouter, Routes,Route} from "react-router-dom"
import Student from "./components/Student";
import CreateStudent from "./components/CreateStudent";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Student/>}/>
      <Route path="/createStudent" element={<CreateStudent/>}/>
      <Route path="/updateStudent/:id" element={<UpdateStudent/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
