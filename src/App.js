import "./styles.css";
import Header from "./header";
import Menu from "./menu";
import MainContent from "./mainContent";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div id="container">
        <Menu />
        <MainContent />
      </div>
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
