/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import "./Users.css";
import SideBar from "../../Components/SideBar/SideBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import deleteIcon from "../../Assets/Icon/deleteIcon.svg";
import edit from "../../Assets/Icon/edit.svg";
import userImg from "../../Assets/Img/userImg.svg";
import adduser from "../../Assets/Icon/adduser.svg";

// import quickState from '../../Assets/Icon/quickState.svg';
// import { Component } from "react";
// import Chart from "react-apexcharts";
// import ReactApexChart from 'react-apexcharts';

import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currenUser, setCurrentUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/users/")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data.users);
        const data1 = localStorage.getItem("user");
        const userdata = JSON.parse(data1);
        setCurrentUser(userdata.user);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const deleteUser = (id) => {
    fetch(`http://localhost:8000/api/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const updatedUserData = userData.filter((user) => user._id !== id);
          setUserData(updatedUserData);
        } else {
          console.error("Failed to delete user.");
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <>
      <div>
        <div className="users__container">
          <div className="users__sidebar">
            <SideBar></SideBar>
          </div>
          <div className="users__top">
            <SearchBar></SearchBar>
          </div>
          <div className="users__main">
            <div className="schedule">
              <div>Users</div>
              <img
                src={adduser}
                alt=""
                className="add_icon"
                onClick={() => navigate("./add-user")}
              />
            </div>

            <div className="users__list">
              <div className="users__list__title">
                <div>Photo</div>
                <div>User ID</div>
                <div>Username</div>
                <div>Email</div>
                <div>Role</div>
                <div>Phone</div>
                <div>Location</div>
                <div>Control</div>
              </div>
              <div className="users__data__container">
                {userData.map((user) => (
                  <div className="users__data" key={user._id}>
                    <div>
                      <img src={userImg} alt="" className="user_img" />
                    </div>
                    <div>{user._id}</div>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <div>{user.role}</div>
                    <div>077758246</div>
                    <div>Amman</div>

                    <div className="users__icon__container">
                      <div>
                        <img
                          src={edit}
                          alt=""
                          onClick={() =>
                            navigate("/edit-user", { state: user })
                          }
                        />
                      </div>
                      <div>
                        <img
                          src={deleteIcon}
                          alt=""
                          onClick={() => deleteUser(user._id)}
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
};

export default Users;

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

{
  /* <div className="users__chart__container">
            <div className="quickState">
                <div>Quick State</div>
                <img src={quickState} alt="" />
                
            </div>
            <div className="users__chart">
                <div>Statics</div>
                <div>Realtime users</div>
                <div>517<span className="span">users</span></div>
                <div id="chart-1">
                <ReactApexChart options={state.options1} series={state.series1} type="line" height={100} width={175} />
              </div>

            </div>
            <div className="users__chart">
                <div>Statics</div>
                <div>Total visits</div>
                <div>202.4k</div>
                <div id="chart-1">
                <ReactApexChart options={state.options2} series={state.series2} type="line" height={100} width={175} />
              </div>
            </div>
            <div className="users__chart">
                 <div>Statics</div>
                <div>Visit duration</div>
                <div>5m 8s</div>
                <div id="chart-1">
                <ReactApexChart options={state.options3} series={state.series3} type="line" height={100} width={175} />
              </div>
            </div>
        </div> */
}
