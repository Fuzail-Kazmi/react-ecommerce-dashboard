import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EcommercePg from "./pages/EcommercePg";
import CreateNew from "./pages/CreateNew";
import ProductListPg from "./pages/ProductListPg";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-grow">
            <Routes>
              <Route path="/ecommerce/create-new" element={<CreateNew />} />
              <Route path="/ecommerce/product-list" element={<ProductListPg />} />
              <Route path="/dashboard/ecommerce" element={<EcommercePg />} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
