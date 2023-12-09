import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className=" no-scrollbar">
        <Header />
        <Sidebar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
