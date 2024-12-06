import React from "react";
import Navbar from "./components/Navbar/Navbar";
import JobList from './components/Job/JobList';
import Footer from './components/Footer/Footer';  




function App() {
  return (
    <div className="App">
      <Navbar />
      <JobList />
      <Footer />
     
    </div>
  );
}

export default App;
