      //     
	  var challengeNumber = 7;
	 
	  /* Challenge Variables */ 
      var challenge = [
	    //Start Copying the Array Here
        {challengetype: "optionhere",  // options are "freeform", "structured"
         question:"Your question text goes here",
         media:"mediaoptionhere", //options are "image", "video", or "none" 
         videosource:"//www.yourvideoembedlinkhere.com",
         imagesource:"http://yourimgurlhere.com", //image URLs go here
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
         
         //Start Copying the Array Here
        {challengetype: "structured",
         question:"President Obama needs to speak about race relations more often. Respond and tell us what's behind your response.",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/SELDTUaHRxQ",
         imagesource:"http://graphics8.nytimes.com/images/2013/08/28/us/OBAMA-1/OBAMA-1-articleLarge.jpg",
         imageurl:"http://www.nytimes.com/2013/08/28/us/politics/president-not-preacher-but-speaking-more-on-race.html?hp",
         imagedescription:"President, Not Preacher, but Speaking More on Race",
         answers:["agree", "disagree"],
         answertags:["agree", "disagree"],
         challengetag:"ycst002",
         primarytag:"soc119"},
         //Stop Copying the Array Here
         
         //Start Copying the Array Here
        {challengetype: "structured",
         question:"About what percentage of the people throughout the world who are NOT Americans would like to permanently move to the U.S.?  Take a picture or make a video that supports your conclusion.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/SELDTUaHRxQ",
         imagesource:"http://graphics8.nytimes.com/images/2013/08/28/us/OBAMA-1/OBAMA-1-articleLarge.jpg",
         imagedescription:"President, Not Preacher, but Speaking More on Race",
         answers:["A: 83.5", "B: 59.8", "C: 33.4", "D: 14.9", "E: 1.5"],
         answertags:["A", "B", "C", "D", "E"],
         challengetag:"ycst003",
         primarytag:"soc119"},
         //Stop Copying the Array Here
         
          //Start Copying the Array Here
        {challengetype: "freeform",
         question:"Show us something from your life that clearly identifies or reflects your racial/ethnic ancestry.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/SELDTUaHRxQ",
         imagesource:"http://graphics8.nytimes.com/images/2013/08/28/us/OBAMA-1/OBAMA-1-articleLarge.jpg",
         imagedescription:"President, Not Preacher, but Speaking More on Race",
         answers:["Submit Photo or Video"],
         answertags:["ancestry"],
         challengetag:"ycst004",
         primarytag:"soc119"},
         //Stop Copying the Array Here
         
         //Start Copying the Array Here
        {challengetype: "freeform",
         question:"What is your biggest 'fail' related to race and or culture?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/SELDTUaHRxQ",
         imagesource:"http://farm3.staticflickr.com/2035/2371224505_208c8589a1.jpg",
         imagedescription:"ALL ABOARD THE FAILBOAT",
         answers:["Submit Response!"],
         answertags:["fail"],
         challengetag:"ycst005",
         primarytag:"soc119"},
         //Stop Copying the Array Here
         
         //Start Copying the Array Here
        {challengetype: "freeform",
         question:"If you could talk to 'The Man' what would you ask him?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/SELDTUaHRxQ",
         imagesource:"http://cdn2.business2community.com/wp-content/uploads/2013/01/shutterstock_774486401.jpg",
         imagedescription:"The Man is our collective understanding of corporate and power cultures",
         answers:["Submit Response!"],
         answertags:["TheMan"],
         challengetag:"ycst006",
         primarytag:"soc119"},
         //Stop Copying the Array Here
         
         //Start Copying the Array Here
        {challengetype: "freeform",
         question:"What can we all learn from #thehubisnotaplayground ?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/SELDTUaHRxQ",
         imagesource:"http://onwardstate.com/wp-content/uploads/2013/09/BTb1u9oIcAA_6i1.jpeg",
         imageurl:"https://twitter.com/search?q=%23thehubisnotaplayground&src=tyah&mode=realtime",
         imagedescription:"#thehubisnotaplayground",
         answers:["Submit Response!"],
         answertags:["thehubisnotaplayground"],
         challengetag:"ycst007",
         primarytag:"soc119"},
         //Stop Copying the Array Here
         
         //Start Copying the Array Here
        {challengetype: "freeform",
         question:"When I think of what is going on in Syria my attention turns to...",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/SELDTUaHRxQ",
         imagesource:"http://thumbnails.visually.netdna-cdn.com/syria-damascus-areas-of-influence-and-areas-reportedly-affected-by-21-august-chemical-attack_5227c5a37c93a_w1163.png",
         imageurl:"http://blog.visual.ly/syria-visualizations/",
         imagedescription:"Syrian Conflict",
         answers:["Submit Response!"],
         answertags:["syria"],
         challengetag:"ycst008",
         primarytag:"soc119"},
         //Stop Copying the Array Here
         
       ];
