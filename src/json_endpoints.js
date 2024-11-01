const { insertContact, getAllContacts } = require("./controller");
function jsonEndpoints(app) {
  app.post("/api/contacts/add", async (req, res) => {
    try {
      const { names, email, message } = req.body;

      const contactId = await insertContact(names, email, message);
      res.status(200).json("Your message is sent successfully");
    } catch (err) {
      res.status(404).json(err.message);
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await getAllContacts();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(404).json(error.message);
    }
  });
}

module.exports = { jsonEndpoints };
