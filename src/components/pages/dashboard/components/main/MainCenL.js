import React from "react";
import verified from "../../assets/verified.svg";
import forward from "../../assets/forward.svg";
import "./maincen.css";
import uppink from "../../assets/Uppink.svg";
import upgreen from "../../assets/upgreen.svg";
import downred from "../../assets/downred.svg";
import TransactionDetails from "./TransactionDetails";

function MainCenL() {
  return (
    <div className="main-cen-l">
      <div className="popInfo">
        <img className="verified-icon m-2" src={verified} alt="" srcset="" />
        <p className="pop-text-red m-2">Complete Setup</p>
        <p className="pop-text-norm m-2">
          Complete your account to enjoy more Ovest benefits.
        </p>
        <img className="forward-icon m-2" src={forward} alt="" />
      </div>

      <div className="recent-transact">
        <div className="">
          <div className="recentT">
            <p className="recentP">Recent Transactions</p>
            <p className="vAll">View all</p>
          </div>
        </div>
        <TransactionDetails
          icon={upgreen}
          title={"Wallet deposit"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#038830" }}
        />
        <TransactionDetails
          icon={downred}
          title={"Wallet deposit"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
        <TransactionDetails
          icon={uppink}
          title={"Gold Plan Vest"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ea8e03" }}
        />{" "}
        <TransactionDetails
          icon={downred}
          title={"Wallet deposit"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}

        />
        <hr />
      </div>
    </div>
  );
}

export default MainCenL;
