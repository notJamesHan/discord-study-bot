const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  realuser: String,
  timestart: Date,
  timetotal: Number,
  status: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
