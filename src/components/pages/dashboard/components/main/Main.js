import React from "react";
import "./Main.css";
import hello from "../../assets/hello.svg";

import AccountBal from "./AccountBal";
import MainTitle from "./MainTitle";
import download from "../../assets/Download.svg";
import upload from "../../assets/Upload.svg";
import MainCenL from "./MainCenL";
import PackageWrap from "./PackageWrap";
import apple from "../../assets/apple-btn.png";
import android from "../../assets/apple-btn.png";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}
        <MainTitle />
        {/* <!-- MAIN TITLE ENDS HERE --> */}
        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="row ">
          <div className="main__cards col-lg-4 ">
            <div className=" w1">
              <div className="card_inner1">
                <p className="card-tit ">OVest Wallet Balance</p>
                <p className="amount ">&#36; 0.00</p>

                <div className="wallet-icons mt-4 ">
                  <div className="wallet-icons-bg1">
                    <img className="" src={download} alt="" />
                  </div>
                  <div
                    className="
                  wallet-icons-bg2"
                  >
                    <img className="" src={upload} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__cards col-lg-4">
            <div className="wallet w2">
              <div className="card_inner">
                <p className="card-tit">OVest Wallet Balance</p>
                <p className="amount">&#36; 0.00</p>
                <p className="change">0.0% portfolio change today</p>

                <div className="wallet-footer1">
                  <p className="returns">Total Returns:</p>
                  <p className="amount">&#36; 0.00</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="main__cards col-lg-4">
            <div className="wallet w3">
              <div className="card_inner">
                <p className="card-tit">OVest Wallet Balance</p>
                <p className="amount">&#36; 0.00</p>
                <p className="change">0.0% portfolio change today</p>
                <div className="wallet-footer2">
                  <p className="returns">Total Returns:</p>
                  <p className="amount">&#36; 0.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-center row">
          <div className="main-center-l col-lg-8">
            <MainCenL />
          </div>
          <div className="main-center-r col-lg-4">
            <PackageWrap />
            <div className="mobile-download mt-5">
              <p>Download the Mobile App</p>
              <img src={apple} alt="" srcset="" />
              <img src={android} alt="" srcset="" />
            </div>
          </div>
        </div>
        {/* <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Times of Watching</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div> */}
        {/* <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Videos</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div> */}
        {/* <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Likes</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div> */}
        {/* <!-- MAIN CARDS ENDS HERE --> */}
        {/* <!-- CHARTS STARTS HERE --> */}
        {/* <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
