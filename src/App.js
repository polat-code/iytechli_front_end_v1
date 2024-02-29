import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat/Chat";
import AnonymousDetail from "./components/AnonymousDetail/AnonymousDetail";
import Anonymous from "./components/Anonymous/Anonymous";
import NewAnonymousPost2 from "./components/NewAnonymousPost/NewAnonymousPost2";
import MyMessages from "./components/MyMessages/MyMessages";
import EditUserProfile from "./components/EditUserProfile/EditUserProfile";
import UserProfile from "./components/UserProfile/UserProfile";
function App() {
  return (
    <Routes>
      <Route path="/chat" element={<Chat userFullName="Özgürhan Polat" />} />
      <Route path="/anonymous" element={<Anonymous />} />
      <Route path="/anonymous-detail" element={<AnonymousDetail />} />
      <Route path="/new-anonymous-post" element={<NewAnonymousPost2 />} />
      <Route path="/my-messages" element={<MyMessages />} />
      <Route path="/edit-user-profile" element={<EditUserProfile />} />
      <Route path="/user-profile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
