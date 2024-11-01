import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imgLink: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    sequenceNo: {
      type: Number,
    },
  },
  { 
    collection: "sp_banner_master", 
    timestamps: { updatedAt: true } // This adds an updatedAt field
  }
);

const Banner = mongoose.model("sp_banner_master", bannerSchema);
export default Banner;
