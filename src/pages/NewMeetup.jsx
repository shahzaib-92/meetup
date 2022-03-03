import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

export default function NewMeetup() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch("https://meetup-fe76a-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
    });
  }

  return <NewMeetupForm onAddNewMeetup={addMeetupHandler}></NewMeetupForm>;
}
