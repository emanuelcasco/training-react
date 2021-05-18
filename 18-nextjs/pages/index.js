import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/meetups');
  return {
    props: {
      meetups: await response.json(),
      revalidate: 3600, // seconds to wait until regenerate
    },
  };
};

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta name="description" content="React meetups list" />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export default HomePage;
