import { Contact } from "../models/contact.model.js";
import { staticContactFormPath, staticGreetingPath } from "../app.js";

export const showContactForm = (req, res) => {
  try {
    return res.status(302).sendFile(staticContactFormPath);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Error Occurred");
  }
};

export const submitContactForm = async (req, res) => {
  try {
    const body = req.body;

    console.log(req.body);
    await Contact.create(body);
    return res.status(200).sendFile(staticGreetingPath);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error Occurred");
  }
};
