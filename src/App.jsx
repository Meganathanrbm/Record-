import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationLayout from "./layouts/NavigationLayout";
import navigationRoutes from "./router/auth-route";
import nonAuthRoute from "./router/non-auth-route";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationLayout />}>
            {navigationRoutes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element} />
              );
            })}
          </Route>
          {nonAuthRoute.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
