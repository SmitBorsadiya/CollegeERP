import mongoose from "mongoose";
const { Schema } = mongoose;

const attendencesSchema = mongoose.Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "students",
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: "subjects",
  },
  totalLecturesByFaculty: {
    type: Number,
    default: 0,
  },
  lectureAttended: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("attendences", attendencesSchema);
