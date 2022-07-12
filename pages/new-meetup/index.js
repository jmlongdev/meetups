import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Card from "../../components/ui/Card";
const NewMeetup = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return (
    <Card>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Card>
  );
};

export default NewMeetup;
