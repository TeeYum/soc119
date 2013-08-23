      //     
	  var challengeNumber = 1;
	 
	  /* Challenge Variables */ 
      var challenge = [
	    //Start Copying the Array Here
        {challengetype: "structured",  //options are "freeform", "structured"
         question:"Your question text goes here",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/LSFX9vrwJf8",
         imagesource:"http://i4.mirror.co.uk/incoming/article1443682.ece/ALTERNATES/s615/Rowan%20Atkinson%20as%20Mr%20Bean-1443682", //image URLs go here
         imagedescription:"Mr. Bean", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"etstest2",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
    
        //Start Copying the Array Here
        {challengetype: "freeform",  //options are "freeform", "structured"
         question:"Pose with someone of a different race or culture who you do NOT know and make the photo look like s/he is your friend or family. Watch the following video for inspiration:",
         media:"video", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/SELDTUaHRxQ",
         imagesource:"http://i4.mirror.co.uk/incoming/article1443682.ece/ALTERNATES/s615/Rowan%20Atkinson%20as%20Mr%20Bean-1443682",
         imagedescription:"Mr. Bean",
         answers:["always", "sometimes", "never", "always", "sometimes", "never"],
         answertags:["always", "sometimes", "never", "always", "sometimes", "never"],
         challengetag:"ycst001",
         primarytag:"soc119"},
         //Stop Copying the Array Here


       ];
