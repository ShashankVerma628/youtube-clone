import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { Header, Footer, Sidebar } from "./components";

import { ToastContainer, toast } from 'react-toastify';

// Pages
import { Home, SearchPage, SignIn, Profile, SignUp } from "./pages";

// Styles
import "./scss/styles";

import { YoutubeContextProvider } from "./context/YoutubeContext";

function App() {
  return (

    <YoutubeContextProvider>
      <Router>
        <div className="wrapper">
          <Header />
          <Sidebar />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route path="/search/*" element={<SearchPage />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </YoutubeContextProvider>

  );
}

export default App;