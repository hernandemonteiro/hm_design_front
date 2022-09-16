import ReactDOM from "react-dom/client";
import Main from "./components/UI/Main";
import AppRouter from "./router";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Main>
      <AppRouter />
    </Main>
);
