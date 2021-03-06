"use strict";

const h = require(`../../../helpers`);

module.exports = (mongoose) => {
    const wordSchema = new mongoose.Schema({
        word: {
            required: true,
            type: String,
            trim: true,
            lowercase: true,
        },
        article: {
            required: false,
            type: String,
            trim: true,
            lowercase: true,
            default: ``
        },
        context: {
            required: false,
            type: String,
            trim: true,
            lowercase: true,
            default: ``
        },
        translation: {
            required: true,
            type: String,
            trim: true,
            lowercase: true,
        },
        articleTranslation: {
            required: false,
            type: String,
            trim: true,
            lowercase: true,
            default: ``
        },
        contextTranslation: {
            required: false,
            type: String,
            trim: true,
            lowercase: true,
            default: ``
        },
        score: {
            required: false,
            type: Number,
            default: 0,
            index: 1,
        },
        failed: {
            required: false,
            type: Number,
            default: 0,
        },
        succeeded: {
            required: false,
            type: Number,
            default: 0,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            select: true
        },
        translatedTimestamp: {
            type: Date,
            default: h.getCorrectedTimestamp,
            timezone: `Europe/Warsaw`,
            required: false,
            index: 1
        }
    }, {
        collection: `words`,
    });

    return mongoose.model(`word`, wordSchema);
};
