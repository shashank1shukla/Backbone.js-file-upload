	function getAllFiles(view,files){
		$('#spinner').show();
		new App42Upload().getAllFiles({
		success: function(object) {
		var fileObj = JSON.parse(object)
		console.log(object)
		var file = fileObj.app42.response.upload.files.file
		$("body").append(view.render().el);
		if(file instanceof Array){
			for (var i=0; i < file.length; i++){
				files.add(new File().set(file[i]));
			}
		}else{
		    files.add(new File().set(file));
		}
		     $('#spinner').hide();
		},
		error: function(error) {
			$('#spinner').hide();
			var errorObj = JSON.parse(error),
			errorMessage = errorObj.app42Fault.details;
			alert(errorMessage);
		}
		}); 
	}
	
	function saveImg(view,files) {
		$('#spinner').show();
		var name = "Smiley face";
		var filePath = document.getElementById("img");
		var file = filePath.files[0];
		if(file==null){
		$('#spinner').hide();
		alert("please select at least one file.");
		}
		
		new App42Upload().uploadFile(name, file, "IMAGE","App42 Sample Upload",{
			success: function(object) {
			var fileObj = JSON.parse(object)
			$("body").append(view.render().el);
			var file = fileObj.app42.response.upload.files.file
			 files.add(new File().set(file));
			 console.log(files)
			 $('#spinner').hide();
			},
			error: function(error) {
			var errorObj = JSON.parse(error),
			errorMessage = errorObj.app42Fault.details;
			alert(errorMessage);
			console.log(error)
			$('#spinner').hide();
			}
		});
	}