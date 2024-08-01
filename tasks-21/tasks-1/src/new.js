import React from "react";

function App() {
    let person = {
        Name:['divya','jai','teja','chinna','chinntu'],
        age:['23','21','17','16','18'],
        salary:['100000','80000','70000','60000','82000'],
        Designation:['Banglore','mysore','andhra pradesh','hyderbad','kerala']
    }
    return (
      <div className="App">
      <h1>Personal Information!</h1>
      <p>Name :{person.Name[0]}</p>
      <p>Age:{person.age[0]}</p>
      <p>Designation:{person.Designation[0]}</p>
      </div>
    );
  }
  
  export default App;