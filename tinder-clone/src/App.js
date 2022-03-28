import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import OnBoarding from "./pages/onboarding";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/dashboard"} element={<Dashboard/>}/>
          <Route path={"/onboarding"} element={<OnBoarding/>}/>

ß
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
