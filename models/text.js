const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
	intro: {
		type: String,
		required: [true]
	},
	caption1: {
		type: String,
		required: [true]
	},
	caption2: {
		type: String,
		required: [true]
	}
})

module.exports = mongoose.models.text || mongoose.model('text', textSchema);
