const { quotes: quotesData } = require('../data');
const { getRandomElement } = require('../utils/random');
const express = require('express');

const quoteRouter = express.Router();

// Route to get all quotes
// GET /api/quotes
// Returns an array of all quotes
// Example response: { quotes: [{ quote: "Quote 1", person: "Author 1" }, { quote: "Quote 2", person: "Author 2" }] }
quoteRouter.get('/', (req, res) => {
  const person = req.query.person;
  // If a person query parameter is provided, filter quotes by that person
  // Example: /api/quotes?person=Grace Hopper
  if (person) {
    // Filter quotes by person if query parameter is provided
    // If no quotes match the person, the filter will return an empty array
    const filteredQuotes = quotesData.filter(q => q.person.toLowerCase() === person.toLowerCase());
    return res.json({ quotes: filteredQuotes });
  }

  res.json({ quotes: quotesData });
});

// Route to get a random quote
// GET /api/quotes/random
// Returns a random quote from the quotes array
// Example response: { quote: { quote: "Random Quote", person: "Random Author" }}
quoteRouter.get('/random', (req, res) => {
  const quote = getRandomElement(quotesData);
  res.json({ quote });
});

// Route to add a new quote
// POST /api/quotes?quote=New Quote&person=New Author
// Expects query parameters 'quote' and 'person'
// Returns the newly added quote
// Example response: { quote: { quote: "New Quote", person: "New Author
quoteRouter.post('/', (req, res) => {
  const { quote, person } = req.query;

  // Validate the query parameters
  // Ensure both quote and person are provided
  // If either is missing, return a 400 Bad Request response
  if (!quote || !person) {
    return res.status(400).json({ error: 'Quote and person are required.' });
  }

  // If validation passes, add the new quote to the quotesData array
  const newQuote = { quote, person };
  quotesData.push(newQuote);
  res.status(201).json({ quote: newQuote });
});

module.exports = quoteRouter;
