const axios = require('axios');

module.exports = async (req, res) => {
  const { year } = req.query;

  // Example data for demonstration. Replace this with an actual API call or scraping logic.
  const conflicts = [
    {
      location: [48.3794, 31.1656],
      title: "Ukraine-Russia Conflict",
      year: 2014,
      description: "The conflict between Ukraine and Russia began in 2014 following Russia's annexation of Crimea, and has involved intense fighting in eastern Ukraine's Donbas region."
    },
    {
      location: [34.8021, 38.9968],
      title: "Syrian Civil War",
      year: 2011,
      description: "The Syrian Civil War started in 2011 as part of the Arab Spring uprisings and has since become a complex conflict involving multiple factions and international powers."
    },
    {
      location: [31.7683, 35.2137],
      title: "Israel-Palestine Conflict",
      year: 1948,
      description: "The Israel-Palestine conflict is a long-standing geopolitical dispute involving issues of territory, national identity, and sovereignty, with roots tracing back to the early 20th century."
    }
  ];

  const filteredConflicts = conflicts.filter(conflict => conflict.year <= year);

  res.status(200).json(filteredConflicts);
};
