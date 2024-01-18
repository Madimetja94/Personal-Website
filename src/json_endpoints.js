const { insertContact } = require("./controller");
function jsonEndpoints(app) {
  app.post("/add-contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      const contactId = await insertContacts(name, email, message);
      res.status(200).json("Contacts added successfully");
    } catch (err) {
      res
        .status(404)
        .json(
          ApiResponse.error("Error saving contact details to the database")
        );
    }
  });
}

module.exports = { jsonEndpoints };
