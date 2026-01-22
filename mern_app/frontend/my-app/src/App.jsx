import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList";
import CreateUser from "./pages/createUser";
import Navbar from "./componenets/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}
