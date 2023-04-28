import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header";
import Services from "./sevices/Services";
import Info from "./info/Info";
import Feed from "./feed/Feed";
import Footer from "./footer/Footer";
import Sub from "./sub/Sub";
function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Info />
      <Feed />
      <Sub />
      <Footer />
    </div>
  );
}

export default App;
