import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return(
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    <ItemListContainer/>
    </>
  )
};
export default App;
