import Head from 'next/head';
import MeetupDetails from '../../components/meetups/MeetupDetails';

export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/meetups/ids');
  const ids = await response.json();
  return {
    fallback: 'blocking',
    paths: ids.map((slug) => ({ params: { slug } })),
  };
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `http://localhost:3000/api/meetups/${context.params.slug}`
  );
  return {
    props: { meetup: await response.json() },
    revalidate: 3600, // seconds to wait until regenerate
  };
};

const MeetupDetailsPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>
      <MeetupDetails meetup={props.meetup} />
    </>
  );
};

export default MeetupDetailsPage;
