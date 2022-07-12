// import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
import Card from "../components/ui/Card";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address",
    description: "First meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address",
    description: "First meetup",
  },
];

const HomePage = () => {
  return (
    <Card>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Card>
  );
};
export default HomePage;
