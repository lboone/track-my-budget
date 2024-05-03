import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    clerkUserId: { type: String, required: true },
    incomeCategories:{
        type: Array,
        default: ['salary', 'bonus', 'commission', 'dividends', 'other'],
        required: true
    },
    expenseCategories:{
        type: Array,
        default: ['shopping','housing', 'insurance','health','food','utilities', 'groceries', 'transportation', 'entertainment', 'donations','other'],
        required: true
    },
  },
  { timestamps: false }
);

// delete model if it exists
if(mongoose.models && mongoose.models["users"]){
    delete mongoose.models["users"];
}

const UserModel = mongoose.model("users", userSchema);
export default UserModel;