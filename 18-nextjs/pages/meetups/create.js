import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const CreateMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (data) => {
    await fetch('/api/meetups', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    router.push('/');
  };
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default CreateMeetupPage;
