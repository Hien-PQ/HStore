// const express = require('express');
// const router = express.Router();
// const { Configuration, OpenAIApi } = require('openai');

// const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
// const openai = new OpenAIApi(configuration);

// router.post('/', async (req, res) => {
//     try {
//         const { message } = req.body;
//         const completion = await openai.createChatCompletion({
//             model: 'gpt-3.5-turbo',
//             messages: [{ role: 'user', content: message }]
//         });
//         res.json({ reply: completion.data.choices[0].message.content });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ reply: 'Error from AI service' });
//     }
// });

// module.exports = router;
// export default router;
