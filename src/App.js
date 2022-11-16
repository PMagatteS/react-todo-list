import Navbar from "./components/Navbar";
import ModalForm from "./components/ModalForm";
import Sidebar from "./components/Sidebar";
import TaksTable from "./components/TaksTable";


function App() {


    
  return (
    <div className="App">
      <Navbar></Navbar>
      <ModalForm></ModalForm>
      <Sidebar></Sidebar>
      <TaksTable></TaksTable>
     
    </div>
  );
}

export default App;
