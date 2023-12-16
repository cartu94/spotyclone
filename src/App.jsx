import Categories from "./pages/Categories";
import Home from "./pages/Home";
import SearchHome from "./components/SearchHome";
import LibraryCase from "./components/library/LibraryCase";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="font-montserrat flex bg-black p-2 pb-[76px] gap-2 w-screen h-screen">
      <Router>
        <div className="flex flex-col gap-2 lg:w-[full] h-full">
          <SearchHome />
          <LibraryCase />
        </div>
        <div className="w-full bg-background rounded-xl overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
