import { MongoClient, ObjectId } from 'mongodb';

const handler = async (req, res) => {
  const client = await MongoClient.connect(
    'mongodb+srv://emanuelcasco:nextjsproject@cluster0.jsxc8.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = await client.db();
  const meetupsCollections = await db.collection('meetups');

  switch (req.method) {
    case 'GET':
      const meetup = await meetupsCollections.findOne({
        _id: ObjectId(req.query.slug),
      });
      client.close();
      return res.status(200).json(meetup);
    default:
      client.close();
      return res.status(404);
  }
};

export default handler;
