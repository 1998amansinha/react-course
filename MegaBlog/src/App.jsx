import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import  AuthService  from "./appwrite/auth";
import { Header, Footer } from "./components/index";
import { Outlet } from 'react-router-dom'
import './app.css'

function App() {
  const dispatch = useDispatch(); // For Connecting react and redux .

  const [loading, setLoading] = useState(true); // For Conditional Rendering, If loading is true show Loading icon if loading is false show data .

  useEffect(() => {
    AuthService
    .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
        TODO : <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
