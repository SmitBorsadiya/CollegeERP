import mongoose from "mongoose";
const { Schema } = mongoose;

const marksSchema = mongoose.Schema({
  exam: {
    type: Schema.Types.ObjectId,
    ref: "tests",
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: "students",
  },
  marks: {
    type: Number,
    default: -1,
  },
});

export default mongoose.model("marks", marksSchema);
