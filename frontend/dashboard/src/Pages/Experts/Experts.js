/* eslint-disable no-lone-blocks */
 import React, { useEffect , useState} from "react";
import "./Experts.css";
import SideBar from "../../Components/SideBar/SideBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import deleteIcon from "../../Assets/Icon/deleteIcon.svg";
import edit from "../../Assets/Icon/edit.svg";
import { useNavigate } from "react-router-dom";
import add from "../../Assets/Icon/add.svg";

// import quickState from '../../Assets/Icon/quickState.svg';
// import { Component } from "react";
// import Chart from "react-apexcharts";
// import ReactApexChart from 'react-apexcharts';


    const Experts = ()=>{
      const navigate = useNavigate();

  const [expertData, setExpertData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  // const [currenexpert, setCurrentExpert] = useState("");

      useEffect(() => {
        if (alertMessage) {
          const timer = setTimeout(() => {
            setAlertMessage("");
            setAlertType("");
          }, 3000);
    
          return () => clearTimeout(timer);
        }
     ;


        fetch("http://localhost:8000/api/experts/")
          .then((res) => res.json())
          .then((data) => {
            setExpertData(data.data.experts);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setIsLoading(false);
          });
      }, [alertMessage]);
    
      if (isLoading) {
        return <p>Loading...</p>;
      }

      const deleteExpert = async(id) => {
        const userData = localStorage.getItem('user');
        const user = JSON.parse(userData)
        console.log(user);
       const response = await fetch(`http://localhost:8000/api/experts/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
         },
        })

        const data = await response.json();
          
            if (response.ok) {
              const updatedexpertData = expertData.filter((expert) => expert._id !== id);
              setExpertData(updatedexpertData);
              setAlertType("success");
              setAlertMessage("Expert deleted successfully");
            } else {
              setError(data.message)
              setAlertType("error");
              setAlertMessage(data.message);
              console.log(error);
            }
         
          
      };
      return (
        <>
        
        <div>
      <div className="experts__container">
        <div className="experts__sidebar">
          <SideBar></SideBar>
        </div>
        <div class="experts__top">
          <SearchBar></SearchBar>
        </div>
        <div className="experts__main">
        {alertMessage && (
              <div className={`alert alert-${alertType}`}>{alertMessage}</div>
            )}
          <div style={{display:"flex", alignItems:"center" , marginTop:"2rem"}}>

          <div className="experts">Experts</div>
         

          <div
            style={{ marginLeft: "73rem" }}
            className="addNew_expert"
            onClick={() => navigate("/create-expert")}
          >
            <div>add new</div>

            <img src={add} alt="" style={{ width: "15px" }} />
          </div>
          </div>
          <div className="experts__list">
            <div className="experts__list__title">
              <div>expert ID</div>
              <div>expertname</div>
              <div>Phone</div>
              <div>Email</div>
              <div>Location</div>
              <div>Availability</div>
              <div>experience</div>
              <div>Department</div>
              <div>About</div>
              <div>Control</div>
            </div>
            <div className="experts__data__container">

            {expertData.map((expert) => (
                  <div className="experts__data" key={expert._id}>
                    
                    <div>{expert._id}</div>
                    <div>{expert.expertname}</div>
                    <div>{expert.tel}</div>
                    <div>{expert.email}</div>
                    <div>{expert.location}</div>
                    <div>{expert.availability}</div>
                    <div>{expert.experience}</div>
                    <div>{expert.department}</div>
                    <div>{expert.about}</div>

                    <div className="experts__icon__container">
                      <div>
                        <img
                          src={edit}
                          alt=""
                          onClick={() =>
                            navigate("/edit-expert", { state: expert })
                          }
                        />
                      </div>
                      <div>
                        <img
                          src={deleteIcon}
                          alt=""
                          onClick={() => deleteExpert(expert._id)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
      );
    }

  



export default Experts;


                          // const state = {
                        
                          //   series1: [{
                          //     data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
                          //   }],
                          //   options1: {
                          //     colors:['#62dff0'],
                          //     chart: {
                          //       type: 'line',
                          //       width: 100,
                          //       height: 35,
                          //       sparkline: {
                          //         enabled: true
                          //       }
                          //     },
                          //     tooltip: {
                          //       fixed: {
                          //         enabled: false
                          //       },
                          //       x: {
                          //         show: false
                          //       },
                          //       y: {
                          //         title: {
                          //           formatter: function (seriesName) {
                          //             return ''
                          //           }
                          //         }
                          //       },
                          //       marker: {
                          //         show: false
                          //       }
                          //     }
                          //   },
                          
                          //   series2: [{
                          //     data: [25, 72, 41, 69, 63, 80, 150, 12, 58, 9, 45]
                          //   }],
                          //   options2: {
                          //     colors:['#B9B4FD'],
                          //     chart: {
                          //       type: 'line',
                          //       width: 100,
                          //       height: 35,
                          //       sparkline: {
                          //         enabled: true
                          //       }
                          //     },
                          //     tooltip: {
                          //       fixed: {
                          //         enabled: false
                          //       },
                          //       x: {
                          //         show: false
                          //       },
                          //       y: {
                          //         title: {
                            //           formatter: function (seriesName) {
                          //             return ''
                          //           }
                          //         }
                          //       },
                          //       marker: {
                          //         show: false
                          //       }
                          //     }
                          //   },
                          
                          //   series3: [{
                          //     data: [25, 66, 35, 89, 63, 25, 94, 23, 36, 5, 74]
                          //   }],
                          //   options3: {
                          //     colors:['#86FFAF'],
                          //     chart: {
                          //       type: 'line',
                          //       width: 100,
                          //       height: 35,
                          //       sparkline: {
                          //         enabled: true
                          //       }
                          //     },
                          //     tooltip: {
                          //       fixed: {
                          //         enabled: false
                          //       },
                          //       x: {
                          //         show: false
                          //       },
                          //       y: {
                          //         title: {
                          //           formatter: function (seriesName) {
                          //             return ''
                          //           }
                          //         }
                          //       },
                          //       marker: {
                          //         show: false
                          //       }
                          //     }
                          //   },
                          
                          
                          // };
                      
                            
                                    {/* <div className="experts__chart__container">
                                        <div className="quickState">
                                            <div>Quick State</div>
                                            <img src={quickState} alt="" />
                                            
                                        </div>
                                        <div className="experts__chart">
                                            <div>Statics</div>
                                            <div>Realtime experts</div>
                                            <div>517<span className="span">experts</span></div>
                                            <div id="chart-1">
                                            <ReactApexChart options={state.options1} series={state.series1} type="line" height={100} width={175} />
                                          </div>
                            
                                        </div>
                                        <div className="experts__chart">
                                            <div>Statics</div>
                                            <div>Total visits</div>
                                            <div>202.4k</div>
                                            <div id="chart-1">
                                            <ReactApexChart options={state.options2} series={state.series2} type="line" height={100} width={175} />
                                          </div>
                                        </div>
                                        <div className="experts__chart">
                                             <div>Statics</div>
                                            <div>Visit duration</div>
                                            <div>5m 8s</div>
                                            <div id="chart-1">
                                            <ReactApexChart options={state.options3} series={state.series3} type="line" height={100} width={175} />
                                          </div>
                                        </div>
                                    </div> */}