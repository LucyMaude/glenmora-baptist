var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sermonSchema = new Schema({
    mp3Link: String,
    title: String,
    date: String,
});



module.exports = mongoose.model("Sermon", sermonSchema);
