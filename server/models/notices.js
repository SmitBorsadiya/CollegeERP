import mongoose from "mongoose";

const noticesSchema = mongoose.Schema({
  topic: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  from: {
    type: String,
    require: true,
  },
  noticeFor: {
    type: String,
    require: true,
  },
});

export default mongoose.model("notices", noticesSchema);
