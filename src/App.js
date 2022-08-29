import { About, Footer, Header, Work } from "./components";
import { Navbar, SocialMedia } from "./layouts";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <SocialMedia />
      <Navbar />
      <Header />
      <Work />
      <About />
      <Footer />
    </div>
  );
};

export default App;
