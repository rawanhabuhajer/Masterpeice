import React from "react";
import './Transactions.css'
import SideBar from "../../Components/SideBar/SideBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import deleteIcon from "../../Assets/Icon/deleteIcon.svg";
import edit from "../../Assets/Icon/edit.svg";
import userImg from "../../Assets/Img/userImg.svg";
import quickState from '../../Assets/Icon/quickState.svg';
// import { Component } from "react";
// import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';


const Transactions = () => {

  const state = {
    
    series1: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    options1: {
      colors:['#62dff0'],
      chart: {
        type: 'line',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    },
  
    series2: [{
      data: [25, 72, 41, 69, 63, 80, 150, 12, 58, 9, 45]
    }],
    options2: {
      colors:['#B9B4FD'],
      chart: {
        type: 'line',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    },
  
    series3: [{
      data: [25, 66, 35, 89, 63, 25, 94, 23, 36, 5, 74]
    }],
    options3: {
      colors:['#86FFAF'],
      chart: {
        type: 'line',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    },
  
  
  };

  return (
    <>
    
    <div>
  <div className="Transactions__container">
    <div className="Transactions__sidebar">
      <SideBar></SideBar>
    </div>
    <div class="Transactions__top">
      <SearchBar></SearchBar>
    </div>
    <div className="Transactions__main">
      <div className="Transactions">Schedule</div>
      <div className="Transactions__list">
        <div className="Transactions__list__title">
          <div>Photo</div>
          <div>User ID</div>
          <div>Username</div>
          <div>Payment</div>
          <div>Amount</div>
          <div>Balance</div>
          <div>Control</div>
        </div>
        <div className="Transactions__data__container">
          <div className="Transactions__data">
            <div>
              <img src={userImg} alt="" className="Transactions_img" />
            </div>
            <div>#74589</div>
            <div>Carolina robinson</div>
            <div>Orange money</div>
            <div className="amount">$30</div>
            <div className="balance">$5</div>
            <div className="Transactions__icon__container">
              <div>
                <img src={edit} alt="" />
              </div>
              <div>
                <img src={deleteIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="Transactions__chart__container">
        <div className="Transactions__quickState">
            <div>Quick State</div>
            <img src={quickState} alt="" />
            
        </div>
        <div className="Transactions__chart">
            <div>Statics</div>
            <div>Monthly income</div>
            <div>15.k</div>
            <div id="Transactions__chart1">
            <ReactApexChart options={state.options1} series={state.series1} type="line" height={100} width={175} />
          </div>

        </div>
        <div className="Transactions__chart">
            <div>Statics</div>
            <div>Payment method</div>
            <div style={{fontSize:18}}>Orange money</div>
            <div id="Transactions__chart1">
            <ReactApexChart options={state.options2} series={state.series2} type="line" height={100} width={175} />
          </div>
        </div>
        <div className="Transactions__chart">
             <div>Statics</div>
            <div>Highest payment</div>
            <div>$250</div>
            <div id="Transactions__chart1">
            <ReactApexChart options={state.options3} series={state.series3} type="line" height={100} width={175} />
          </div>
        </div>
    </div>
  </div>
</div>
    </>
  );



}



export default Transactions;
