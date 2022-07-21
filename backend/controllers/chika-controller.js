import Chika from '../models/Chika.js';

export const addChika = async (req, res) => {
  const { content } = req.body;

  const item = new Chika({ content });
  try {
    const addedItem = await item.save();
    res.status(201).json(addedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getChika = async (req, res) => {
  try {
    const data = await Chika.find().sort({ date: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteChika = async (req, res) => {
  try {
    const deletedChika = await Chika.findByIdAndDelete({ _id: req.params.id });

    res.json(deletedChika);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
