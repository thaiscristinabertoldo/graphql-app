import { BrowserRouter } from "react-router-dom";

import { BaseLayout } from "./layout";
import { Routes } from "./Routes";

import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <BrowserRouter>
    <BaseLayout>
      <Routes />
    </BaseLayout>
  </BrowserRouter>
);

export default App;
