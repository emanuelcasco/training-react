import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  const client = await MongoClient.connect(
    'mongodb+srv://emanuelcasco:nextjsproject@cluster0.jsxc8.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = await client.db();
  const meetupsCollections = await db.collection('meetups');

  switch (req.method) {
    case 'GET':
      const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();
      client.close();
      console.log(meetups);
      return res.status(200).json(meetups.map((m) => m._id.toString()));
    default:
      client.close();
      return res.status(404);
  }
};

export default handler;
