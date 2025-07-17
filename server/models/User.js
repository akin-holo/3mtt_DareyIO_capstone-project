import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   username: { type: String, required: true, unique: true },
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true, unique: true},
   watchlist: [{ type: Object }],
   favorites: [{ type: Object }] // or just movie IDs if preferred
}, { timestamps: true});

export default mongoose.model("User", userSchema);