import React from 'react';
import Contractors from '../Contractors/Contractors';

// import MoneyDashboard from "./components/MoneyDashboard/MoneyDashboard";


const DashBord = () => {
    return (
        <div className="p-5 lg:p-14 mt-10 bg-[#FFF] rounded-2xl">
        <div className="lg:flex gap-12 bg-[#FFF]">
          <div className="lg:w-[50%]">
            <Contractors></Contractors>
          </div>
          <div className="lg:w-[50%]">
            <Contractors></Contractors>
          </div>
        </div>
        <div>
          {/* <MoneyDashboard></MoneyDashboard> */}
          <h1>money dash</h1>
        </div>
      </div>
    );
};

export default DashBord;