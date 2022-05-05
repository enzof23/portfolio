import { About, Footer, Header, Work } from "./container";
import { Navbar, SocialMedia } from "./Components";
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
