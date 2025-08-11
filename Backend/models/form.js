import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  type: { type: String, enum: ["categorize", "cloze", "comprehension"], required: true },
  text: String,
  image: String,
  options: [String],
  categories: [String],
  passage: String,
  blanks: [String],
  subQuestions: [String]
});

const formSchema = new mongoose.Schema({
  title: String,
  description: String,
  headerImage: String,
  questions: [questionSchema]
}, { timestamps: true });

export default mongoose.model("Form", formSchema);
