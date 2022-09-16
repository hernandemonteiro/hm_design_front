import ReactDOM from "react-dom/client";
import Loader from "./components/Loader";
import Main from "./components/Main";
import AppRouter from "./routes";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Main>
      <AppRouter />
    </Main>
);
