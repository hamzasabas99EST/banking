import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainAdmin from "./pages/MainAdmin";
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'
import NewAgence from "./pages/NewAgence";
import NewAgent from "./pages/NewAgent";
import Agences from "./pages/Agences";
import Agents from "./pages/Agents";
import MainAgent from "./Agent/MainAgent";
import NewAccount from "./Agent/NewAccount";
import Accounts from "./Agent/Accounts";
import FormTransfert from "./Agent/FormTransfert";

const App = () => {

  return (

    < BrowserRouter >
      <Routes>
        <Route path="/loginAdmin" element={<Login />} />
        <Route path="/NewAdmin" element={<Register />} />
        <Route path="espaceAdmin" element={<MainAdmin />} >

          <Route path="CreateAgence" element={<NewAgence />} />
          <Route path="listAgence" element={<Agences />} />
          <Route path="CreateAgent" element={<NewAgent />} />
          <Route path="listAgent" element={<Agents />} />

        </Route>

        <Route path="espaceAgent" element={<MainAgent />}>
          
          <Route path="CreateAccount" element={<NewAccount />} />
          <Route path="listAccount" element={<Accounts />} />
          <Route path="transfert" element={<FormTransfert />} />

        </Route>

      </Routes>
    </BrowserRouter >




  );
};
export default App;