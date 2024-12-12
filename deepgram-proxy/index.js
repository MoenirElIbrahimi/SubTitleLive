const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = 3000; // Of een andere poort naar keuze

const API_KEY_DeepL = process.env.API_KEY_DeepL; // Access the DeepL API key
const API_KEY_DeepGram = process.env.API_KEY_DeepGram; // Access the Deepgram API key

// Middleware
app.use(cors()); // Hiermee kunnen requests van andere origins worden geaccepteerd
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to provide the Deepgram API key
app.get('/deepgram-key', (req, res) => {
  if (API_KEY_DeepGram) {
    res.json({ apiKey: API_KEY_DeepGram });
  } else {
    res.status(500).json({ error: 'API key not found' });
  }
});

// Translation route for DeepL
app.post('/translate', async (req, res) => {
  const { text, target_lang } = req.body;

  if (!text || !target_lang) {
    return res.status(400).json({ error: 'Missing text or target_lang' });
  }

  try {
    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `DeepL-Auth-Key ${API_KEY_DeepL}`,
      },
      body: new URLSearchParams({
        text: text,
        target_lang: target_lang,
      }),
    });

    const responseText = await response.text();
    console.log('Response van DeepL:', responseText);

    const data = JSON.parse(responseText);
    if (response.ok) {
      res.json(data);
    } else {
      res.status(response.status).json(data);
    }
  } catch (error) {
    console.error('Error while translating:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start de server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
