const mongoose = require("mongoose");

// Define the Tags schema
const tagsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: { 
        type: String 
    },
	courses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "course",
		},
	],
});

// Export the Tags model
module.exports = mongoose.model("tag", tagsSchema);