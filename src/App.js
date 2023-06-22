import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Travel from "./components/Travel";
import Boat from "./components/Boat";
import Space from "./components/space";

function App() {
  return (
    <div>
      <Hero />
      <div className="travel">
        <Space height="120px" />
        <center className="travel-tittle">Travel & Excursion</center>
        <Space height="11px" />
        <center className="travel-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </center>

        <Space height="50px" />

        <div className="travel-card-container">
          <Travel title="Tajudeen Adventure" price="N10" hour="16 hrs" />
          <Space width="40px" />
          <Travel
            title="Byna Alalubarika Adventure"
            price="N100,000,000,000"
            hour="1hr"
          />
          <Space width="40px" />
          <Travel title="Underwater Adventure" price="N45,000" hour="16 hrs" />
          <Space width="40px" />
          <Travel title="Underwater Adventure" price="N45,000" hour="16 hrs" />
        </div>
      </div>

      {/* <div className="section-2">
        <Boat
          title="Private boat Charter"
          timeCard="17 hrs Max"
          cardLorem=" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus"
        />
      </div> */}
    </div>
  );
}

export default App;
