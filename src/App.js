import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat/Chat";
import AnonymousDetail from "./components/AnonymousDetail/AnonymousDetail";
import Anonymous from "./components/Anonymous/Anonymous";
import NewAnonymousPost2 from "./components/NewAnonymousPost/NewAnonymousPost2";
import MyMessages from "./components/MyMessages/MyMessages";
import EditUserProfile from "./components/EditUserProfile/EditUserProfile";
import UserProfile from "./components/UserProfile/UserProfile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { putUserInfo } from "./redux/userSlice";
import SoonPage from "./components/SoonPage/SoonPage";

function App() {
  // Fake data injection
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      putUserInfo({
        id: "1",
        name: "Özgürhan",
        surname: "Polat",
        email: "ozgurhanpolat@gmail.com",
        telephone: "05531521331",
        role: "Öğrenci",
        profileStatus: "Public",
      })
    );
  }, []);

  return (
    <Routes>
      <Route path="/chat" element={<Chat userFullName="Özgürhan Polat" />} />
      <Route path="/anonymous" element={<Anonymous />} />
      <Route path="/anonymous-detail" element={<AnonymousDetail />} />
      <Route path="/new-anonymous-post" element={<NewAnonymousPost2 />} />
      <Route
        path="/my-messages"
        element={<SoonPage pageName={"Mesajlarım"} />}
      />
      <Route path="/edit-user-profile" element={<EditUserProfile />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/teachers" element={<SoonPage pageName={"Hocalar"} />} />
      <Route path="/lessons" element={<SoonPage pageName={"Dersler"} />} />
      <Route
        path="/communities"
        element={<SoonPage pageName={"Topluluklar"} />}
      />
      <Route path="/departments" element={<SoonPage pageName={"Bölümler"} />} />
      <Route path="/places" element={<SoonPage pageName={"Mekanlar"} />} />
      <Route path="/iyte-car" element={<SoonPage pageName={"İyte Araç"} />} />
    </Routes>
  );
}

export default App;
