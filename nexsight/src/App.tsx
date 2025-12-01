import { BrowserRouter, Routes, Route } from "react-router";
import { CustomThemeProvider } from "./contexts";
import { MainLayout } from "./layouts";
import {
  AboutUs,
  Contact,
  FAQ,
  Landing,
  Media,
  News,
  ProductDetails,
  Products,
  Solutions,
  Support,
} from "./pages";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Landing />} />
            <Route path="/Solutions" element={<Solutions />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/media" element={<Media />} />
            <Route path="/news" element={<News />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/support" element={<Support />} />
          </Route>
        </Routes>
      </CustomThemeProvider>
    </BrowserRouter>
  );
};

export default App;
