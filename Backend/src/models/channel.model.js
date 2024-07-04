import mongoose, { Schema } from "mongoose";

const channelSchema = new Schema(
    {
        Poster: {
            type: String,
            required: true
        },
        achievements: {
            type: String,
        },
        
    }
)