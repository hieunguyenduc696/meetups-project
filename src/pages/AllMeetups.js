import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is the first meetup",
    image:
      "https://cdn.yeudulich.com/940x630/media/attraction/attraction/95/98/c9a8-518e-4d3b-b027-bc7f756703af.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup that you definitely should not miss.",
  },
  {
    id: "m2",
    title: "This is the second meetup",
    image:
      "https://cdn.yeudulich.com/940x630/media/attraction/attraction/95/98/c9a8-518e-4d3b-b027-bc7f756703af.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a second, amazing meetup that you definitely should not miss.",
  },
  {
    id: "m3",
    title: "This is the third meetup",
    image:
      "https://cdn.yeudulich.com/940x630/media/attraction/attraction/95/98/c9a8-518e-4d3b-b027-bc7f756703af.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a third, amazing meetup that you definitely should not miss.",
  },
];

const AllMeetupsPage = () => {
  return (
    <div>
      <h1 style={{'text-align': 'center'}}>All Meetups</h1>
      <MeetupList items={DUMMY_DATA} />
    </div>
  );
};

export default AllMeetupsPage;
