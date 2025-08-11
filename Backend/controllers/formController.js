import Form from "../models/form.js";

export const createForm = async (req, res) => {
  try {
    const form = await Form.create(req.body);
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getForm = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ error: "Form not found" });
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
