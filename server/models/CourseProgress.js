const mongoose = require("mongoose");

const courseProgress = new mongoose.Schema({
	courseID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "course",
	},
	userID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	completedVideos: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "subSection",
		},
	],
});

module.exports = mongoose.model("courseProgress", courseProgress);