// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LibraryNav from "./components/LibraryNav";
import Navbar from "./components/Navbar";
import SearchHome from "./components/SearchHome";

export default function App() {
  return (
    <div>
      <Navbar />
      <LibraryNav />
      <SearchHome />
    </div>
  );
}
