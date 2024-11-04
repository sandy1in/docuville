import express from 'express';
import { router } from './routes/imageRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.use('/api/drivingLicense', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
