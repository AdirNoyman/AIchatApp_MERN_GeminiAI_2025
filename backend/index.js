import express from 'express';
import ImageKit from 'imagekit';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const imageKit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

// allow cross-origin requests
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/api/upload', (req, res) => {
  const result = imageKit.getAuthenticationParameters();
  res.send(result);
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🤓🤘`);
});
