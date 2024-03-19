import { Route, Router,Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import ParentPage from "./components/ParentPage";
import Mainpage from "./components/Mainpage";
import Markets from "./components/Markets";
import Exchanges from "./components/Exchanges";
import Tutorials from "./components/Tutorials";
import Wallets from "./components/Wallets";
import Newaccount from "./components/Newaccount";
import SendEthereum from "./components/SendEthereum";
import UserProvider from "./context/userProvider";

const App = () => {
  return (
    <>   <UserProvider>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element ={<ParentPage></ParentPage>}>
            <Route index element ={<Mainpage></Mainpage>}></Route>
            <Route path ="/sendethereum" element={<SendEthereum></SendEthereum>}> </Route>
            <Route path ="/exchanges" element={<Exchanges></Exchanges>}> </Route>
            <Route path ="/tutorials" element={<Tutorials></Tutorials>}> </Route>
           <Route path ="/wallets" element={<Wallets></Wallets>}> </Route>
           <Route path ="/newaccount" element={<Newaccount></Newaccount>}> </Route>
           <Route path ="/signup" element={<Login>  </Login>}> </Route>
           <Route path ="/sendethereum" element={<SendEthereum></SendEthereum>}> </Route>
          </Route>
        </Routes>
        
                 


      
      </div>

      <ButtonGradient /></UserProvider>
    </>
  );
};

export default App;
