const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle the API call
app.post('/', async (req, res) => {
  const payload = req.body; // Assuming the JSON payload is sent in the request body

  try {
    const response = await makeAPICall(payload);
    res.json(response.data);
    // res.status(503).json({ error: 'Internal Server Error' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Function to make API call
async function makeAPICall(payload) {
  try {
    const response = await axios.post('https://webhook.site/6dc2301b-7458-48b0-bdad-20bbf8ca3832', payload); // Replace with your webhook URL
    return response;
  } catch (error) {
    console.log('Error 500 occurred.');
  }
}

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
