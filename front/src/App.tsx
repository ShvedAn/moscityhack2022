import "./App.css";
import AppHeader from "components/AppHeader";
import MainPage from "./pages/MainPage";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import NotFound from "pages/NotFound";
import Onboarding from "pages/Onboarding";
import Events from "pages/Events/Events";
import EventPage from "pages/Events/EventPage";
import EventSuccessRegister from "pages/Events/EventSuccessRegister";
import { useEffect } from "react";
import eventsStore from "stores/events-store";
import PersonalArea from "pages/PersonalArea/PersonalArea";
import { createTheme, ThemeProvider } from "@mui/material";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#5A3DFF',
    },
    secondary: {
      main: '#EFEFEF',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

function App() {
  useEffect(() => {
    eventsStore.init();
  }, []);

  return (
    <ThemeProvider theme={outerTheme}>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/events" element={<Outlet />}>
            <Route index element={<Events />} />
            <Route path=":id" element={<Outlet />}>
              <Route index element={<EventPage />} />
              <Route path="success" element={<EventSuccessRegister />} />
            </Route>
          </Route>
          <Route path="/personalArea" element={<PersonalArea />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
