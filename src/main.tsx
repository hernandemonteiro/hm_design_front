import ReactDOM from "react-dom/client";
import Main from "./components/Main";
import AppRouter from "./routes";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Main>
      <AppRouter />
    </Main>
);
