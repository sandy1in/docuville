import { extractText } from '../services/ocrService.js'

let processImage = async (req, res) => {
    try {
        console.log(req.file.originalname)
        const text = await extractText(req.file.buffer);
        res.json(text);
    } catch (error) {
        res.send(error);
    }
};

export { processImage };
