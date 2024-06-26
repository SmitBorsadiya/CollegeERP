import mongoose from "mongoose";
const { Schema } = mongoose;

const subjectsSchema = mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
    trim: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  totalLectures: {
    type: Number,
    default: 0,
  },
  year: {
    type: String,
    required: true,
  },
  attendence: {
    type: Schema.Types.ObjectId,
    ref: "attendences",
  },
});

export default mongoose.model("subjects", subjectsSchema);
