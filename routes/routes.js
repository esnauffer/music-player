//Assumtions:
// Songs are stored in a public directory in the backend.
// Metadata is stored as JSON in a directory in the backend
// the metadata contains the url of the songs 
  
// relative path to file with songs metadata 
var musicMetaDataFile = 'public/songsMetaData.json';

var appRouter = function(app) {

	 app.get("/", function(req, res) {
		//reads the metadata json file from the public directory. 
		 
		var file = __dirname + '/../' + musicMetaDataFile;
		
		var fs = require('fs');
		
		// check if the metadata file exists
		fs.exists(file,function(exists){
			if(exists)
			{
				//asynchronously read the metadata file and send its info to the UI
				fs.readFile(file, function(err, data) {
					if (err) throw err;
					
					//parse data as a JSON string
					var obj = JSON.parse(data);
					
					//return the info as a JSON
					return res.send(obj);
				});
			}
			else
			{
				//metadata file is missing 
				return res.send({"status": "error", "message": "Missing metadata"});
			}
		});
		
		
	 });
	
	//this end point would be used to retreive songs from some network storage (dropbox, drive, s3).
	app.get('/ext', function(req,res){
		
		res.send("In progress...");
	});
	
	//this end point would be used to fetch metadata from an external API instead of being statically stored in a JSON file.
	app.get('/getMetadataFromApi', function(req,res){
		
		res.send("In progress...");
	});
	
}

module.exports = appRouter;
