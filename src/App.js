import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import SignIn from "./routes/Sign-in/SignIn";

const Shop = () => {
  return (
    <div>
      <h1>Hi there I'm shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
