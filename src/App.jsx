import "./App.css";
import Navigation from "./Components/Navigation";
import ContactHeader from "./Components/ContactHeader";
import ContactForm from "./Components/ContactForm";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navigation></Navigation>
     <main className="main_container">
     <ContactHeader></ContactHeader>
      <ContactForm></ContactForm>
     </main>
    </>
  );
}

export default App;
