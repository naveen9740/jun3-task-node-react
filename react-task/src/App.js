import { Route, Routes } from "react-router-dom";
import { Movies } from "./components/pages/movies";
import { SinglePage } from "./components/pages/singlePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/single-page/:title" element={<SinglePage />} />
    </Routes>
  );
};

export default App;
