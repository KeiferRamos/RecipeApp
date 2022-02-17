import { Route, Routes } from "react-router-dom";
import Login from "../LoginPage/main";
import MainContent from "../RecipePage/MainContent/Components";
import { Home } from "../HomePage/home";
import { NavBar } from "../NavBar/Navbar";
import Recipe from "../RecipePage/Recipe/Components";

export const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/RecipeApp" element={<Home />} />
          <Route path="/about-page" element={<MainContent />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </main>
    </div>
  );
};
