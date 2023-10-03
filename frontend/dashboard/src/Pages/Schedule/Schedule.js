import {React , useEffect , useState} from "react";
import axios from 'axios';
import "./Schedule.css";
import SideBar from "../../Components/SideBar/SideBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import deleteIcon from "../../Assets/Icon/deleteIcon.svg";
import edit from "../../Assets/Icon/edit.svg";
import pending from "../../Assets/Icon/pending.svg";
const Schedule = () => {
  const [bookings, setBookings] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
  
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          'https://vercel-9nlvq4v5v-rawanhabuhajer.vercel.app/api/book'
        );
        if (response.status === 200) {
          const bookingData = response.data.data.bookings;
          setBookings(bookingData);
          setIsLoading(false);
        } else {
          setError("Unexpected response status: " + response.status);
          setIsLoading(false);
        }
      } catch (error) {
        if (error.response) {
          const errorMessage = error.response.data.error;
          setError(errorMessage);
          setIsLoading(false);
        } else if (error.request) {
          setError("Network request failed");
          setIsLoading(false);
        } else {
          setError("Unexpected error: " + error.message);
          setIsLoading(false);
        }
      }
    };

    fetchServices();
    console.log(error)
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="loader"></div>
      </>
    );
  }
  return (
    <div className="schedule__container">
      <div class="schedule__sidebar">
        <SideBar />
      </div>
      <div class="schedule__top">
        <SearchBar />
      </div>
      <div class="schedule__main">
        <h4>Schedule</h4>

        <div className="schedule__list">
          <div className="schedule__list__title">
            <div>Booking No.</div>
            <div>Username</div>
            <div>Service</div>
            <div>Duration</div>
            <div>Date</div>
            <div>Time</div>
            <div>Expert</div>
            <div>Price</div>
            <div>Control</div>
          </div>
          <div className="schedule__data__container">
          {bookings.map((booking, index) => (
            <div className="schedule__data" key={index}>

              <div>{booking._id.substring(0, 10)}</div>
              <div>{booking.user.username}</div>
              <div>{booking.service.servicename}</div>
              <div>{booking.duration}</div>
              <div>{new Date(booking.date).toLocaleDateString()}</div>
              <div>{booking.time}</div>
              <div>{booking.expert.expertname}</div>
              <div>$ {booking.price}</div>

 
              
              <div className="schedule__icon__container">
                <div>
                  <img src={edit} alt="" />
                </div>
                <div>
                  <img src={deleteIcon} alt="" />
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
