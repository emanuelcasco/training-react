import classes from './MeetupDetails.module.css';

const MeetupDetails = ({ meetup }) => {
  return (
    <section className={classes.detail}>
      <img src={meetup.image} alt={meetup.title} />
      <h1>{meetup.title}</h1>
      <p>{meetup.description}</p>
      <address>{meetup.address}</address>
    </section>
  );
};

export default MeetupDetails;
