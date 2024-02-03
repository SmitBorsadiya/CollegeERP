import mongoose from "mongoose";

const departmentsSchema = mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  departmentCode: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("departments", departmentsSchema);
