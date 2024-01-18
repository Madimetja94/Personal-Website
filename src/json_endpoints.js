const { insertContact, getAllContacts } = require("./controller");
function jsonEndpoints(app) {
    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/public/index.html");
    });
  app.post("/contacts/add", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      const contactId = await insertContact(name, email, message);
      res.status(200).json("Contacts added successfully");
    } catch (err) {
      res.status(404).json(err.message);
    }
  });

  app.get("/contacts", async (req, res) => {
    try {
      const contacts = await getAllContacts();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(404).json(error.message);
    }
  });
}

module.exports = { jsonEndpoints };
