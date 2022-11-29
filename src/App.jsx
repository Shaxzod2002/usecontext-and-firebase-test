import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { LoginContext } from "./components/Contexts/LoginContext";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Home from "./components/Home";
import Login from "./components/Login";
import User from "./components/User";
import { db } from "./components/Firebase";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState([]);
  const userLoginRef = collection(db, "login");
  const createUser = async () => {
    await addDoc(userLoginRef, {
      userName,
      email,
      phone,
    });
  };

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userLoginRef);
      setUser(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      console.log(data);
    };
    getUser();
    if (!user) return null;
  });
  return (
    <div className="App bg-gradient-to-br from-cyan-600 to-blue-600">
      <Router>
        <LoginContext.Provider
          value={{
            setUserName,
            setEmail,
            createUser,
            user,
            setPhone,
          }}
        >
          <nav className="w-full min-h-[100px]  flex justify-center items-center gap-5 text-2xl border-b-2 border-b-white">
            <NavLink to={"/"} className="text-white">
              Home
            </NavLink>
            <NavLink to={"/login"} className="text-white">
              Login
            </NavLink>
            <NavLink to={"/user"} className="text-white">
              User
            </NavLink>
          </nav>
          <header className="w-full p-2 min-h-[calc(100vh-100px)] flex justify-center items-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={
                  <Login setEmail={setEmail} setUserName={setUserName} />
                }
              />
              <Route path="/user" element={<User />} />
            </Routes>
          </header>
        </LoginContext.Provider>
      </Router>
    </div>
  );
}

export default App;
