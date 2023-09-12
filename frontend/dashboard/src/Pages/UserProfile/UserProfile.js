/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import SideBar from "../../Components/SideBar/SideBar";
// import SearchBar from "../../Components/SearchBar/SearchBar";
import { useLocation} from "react-router-dom";

const UserProfile = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const location = useLocation();

  useEffect(() => {
  
    setUsername(location.state.username);
    setPassword(location.state.password);
    setEmail(location.state.email);
    setRole(location.state.role);
    setId(location.state.id);
  
    console.log(id);
  }, []);

  // const updateInfo = (e) => {
  //   e.preventDefault();
  
  //   const updatedUser = {
  //     username,
  //     email,
  //     password,
      
  //   };
  
  //   const userId = id; 
  // console.log(userId , "grr");
  //   fetch(`http://localhost:8000/api/users/updateMe/${userId}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedUser),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log("User information updated successfully");

  //      alert("User information updated successfully")
  //       } else {
  //         console.error("Failed to update user.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error updating user:", error);
  //     });
  // };
  
  return (
    <div>
      <div className="user__container">
        <div className="user__sidebar">
          <SideBar></SideBar>
        </div>
        <div className="user__main">
          <div className="userProfile">Edit profile</div>

          <div className="user_booking_list_container">
            <form onSubmit={"updateInfo"}>
              <h4>user information</h4>
              <section>
                <div className="form-row">
                  <label htmlFor="" className="label">
                    username :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="" className="label">
                    Email :
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="" className="label">
                    Password :
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="" className="label">
                    Role :
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Role"
                    value={role}
                    disabled
                  />
                </div>
                <div className="form-row">
                  <button className="form-btn" type="submit">
                    Submit
                  </button>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

{
  /* <div className='userProfile__charts__container'>
            <div className="userProfile__chart">
                <div>Statics</div>
                <div>Realtime users</div>
                <div style={{fontSize:24 , fontWeight:'bold'}}>517<span className="span">users</span></div>
                <div id="userProfile__chart-1">
                <ReactApexChart options={state.options1} series={state.series1} type="line" height={80} width={175} />
              </div>

            // </div>
            // <div className="userProfile__chart">
            //     <div>Statics</div>
            //     <div>Total visits</div>
            //     <div style={{fontSize:24 , fontWeight:'bold'}}>202.4k</div>
            //     <div id="userProfile__chart-1">
            //     <ReactApexChart options={state.options2} series={state.series2} type="line" height={80} width={175} />
            //     </div>
            // </div>
            // <div className="userProfile__chart">
            //      <div style={{fontWeight:'normal'}}>Statics</div>
            //     <div>Visit duration</div>
            //     <div>5m 8s</div>
            //     <div id="userProfile__chart-1">
            //     <ReactApexChart options={state.options3} series={state.series3} type="line" height={80} width={175} />
            //   </div>
            // </div>
            // </div> */
}

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
