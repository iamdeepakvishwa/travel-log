var mongoose = require('mongoose');
var {Schema} = mongoose;

// - Title
// - Description 
// - Comments
// - Rating 
// - Image 
// - Latitue
// - Longitude
// - Created At
// - Updated At

const requiredString =  {
    type:String,
    required: true,
    
 };
 const requiredNumber= {
     type: Number,
     required:true,
 };



var logEntrySchema = new Schema({
  title: requiredString, // String is shorthand for {type: String}
  Description: String,
  comments:   String,
  Image : String,
  rating: {
      type : Number,
      min: 0,
      max: 10,
      default: 0,
  },
  latitude: {
	  ...requiredNumber,
	  min:-90,
	  max:90,
  },
  longitude:{
	  ...requiredNumber,
	  min:-180,
	  max:180	,
  },
  visitDate:{
      type:Date,
      required:true,
  },
},{  timestamps:true
});

const logEntry = mongoose.model('logEntry',logEntrySchema);

module.exports=logEntry;