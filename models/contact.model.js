import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      max: [25, "First Name Should not be more than 25 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      max: [25, "Last Name Should not be more than 25 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      max: [100, "Email Should not be more than 100 characters"],
    },
    phone: {
      type: Number,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      max: [360, "Message Should not be more than 360 characters"],
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);
