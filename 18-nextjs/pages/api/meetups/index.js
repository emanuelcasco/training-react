import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  const client = await MongoClient.connect(
    'mongodb+srv://emanuelcasco:nextjsproject@cluster0.jsxc8.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = await client.db();
  const meetupsCollections = await db.collection('meetups');

  switch (req.method) {
    case 'POST':
      const result = await meetupsCollections.insertOne(req.body);
      client.close();
      return res.status(201).json(result);

    case 'GET':
      const meetups = await meetupsCollections.find().toArray();
      client.close();
      return res.status(200).json(
        meetups.map((m) => ({
          title: m.title,
          description: m.description,
          address: m.address,
          image: m.image,
          id: m._id.toString(),
        }))
      );

    default:
      client.close();
      return res.status(404);
  }
};

export default handler;
