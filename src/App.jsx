import Categories from "./pages/Categories";
import Home from "./pages/Home";
import SearchHome from "./components/SearchHome";
import LibraryCase from "./components/LibraryCase";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="font-montserrat flex bg-black max-h-screen p-2 pb-20 gap-2 w-screen">
      <Router>
        <div className="flex flex-col gap-2 w-[30%]">
          <SearchHome />
          <LibraryCase />
        </div>
        <div className="w-full overflow-y-scroll bg-background">
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
