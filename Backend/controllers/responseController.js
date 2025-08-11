import Response from "../models/response.js";

export const submitResponse = async (req, res) => {
  try {
    const response = await Response.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
