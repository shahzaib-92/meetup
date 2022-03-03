import { Routes, Route } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUps />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </Layout>
  );
}
