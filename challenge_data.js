      //     
	  var challengeNumber = 85;
	 
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
         
         //Start Copying the Array Here
        {challengetype: "freeform",
         question:"What's your memory of 9/11?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/SELDTUaHRxQ",
         imagesource:"http://cdn0.sbnation.com/imported_assets/541187/9-11-01_medium.jpg",
         imagedescription:"Never Forget",
         answers:["Submit Response!"],
         answertags:["911"],
         challengetag:"ycst009",
         primarytag:"soc119"},
         //Stop Copying the Array Here
         
         //Start Copying the Array Here
        {challengetype: "freeform",
         question:"What does 9/11 mean to you today?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/SELDTUaHRxQ",
         imagesource:"http://www.osu.edu/assets/images/features/content/2011-remembering9-11.jpg",
         imagedescription:"Syrian Conflict",
         answers:["Submit Response!"],
         answertags:["911"],
         challengetag:"ycst010",
         primarytag:"soc119"},
         //Stop Copying the Array Here
         
          //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What does this video tell you?",
         media:"video", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/SoRiYOplcwY",
         imagesource:"http://yourimgurlhere.com", //image URLs go here
         imagedescription:"thosehatemuslim", //this is the info that will accompany any photo
         answers:["Submit Response!"],//these are your answer options - you can name and call them anything
         answertags:["muslim"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst011",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		     //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Where do you feel most safe?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.yourvideoembedlinkhere.com",
         imagesource:"http://1.bp.blogspot.com/-2DeQLsAJllA/UBaYgcsz24I/AAAAAAAAEEA/YOuTVY7r23A/s1600/safety.jpg", //image URLs go here
         imagedescription:"safety", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst012",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		      //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"If there was no discrimination in the world, what would you see that you don't see now?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.yourvideoembedlinkhere.com",
         imagesource:"http://acelebrationofwomen.org/wp-content/uploads/2013/05/women_discrimination.jpg", //image URLs go here
         imagedescription:"safety", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst013",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		   //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What's the equivalent of this in the United States?",
         media:"video", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"", //image URLs go here
         imagedescription:"djotzi", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst014",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		   //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"The first Indian American Miss America. Reflections?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://aze.az/photo/420_nina_davuluri_miss_USA_1.jpg", //image URLs go here
         imagedescription:"missamerica", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst015",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		    //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Represent South Asian/Indian culture in a photo in a way that everyone would know what you mean.",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", //image URLs go here
         imagedescription:"indianflag", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst016",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 
		    //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What are some other phrases or cultural artifacts besides these that we could map? (Click on the image for directed web page.)",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://dots.physics.orst.edu/graphics/image_maps/usa_map.gif", //image URLs go here
         imageurl:"http://www.buzzfeed.com/hillaryreinsberg/who-says-yall-and-10-other-maps-showing-where-americans-say",
         imagedescription:"lingomap", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst017",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 	    //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Find where you live on this map and take note of the lines of segregation or integration. Take a photo that illuminates what it was like to grow up in your neighborhood.(Click on the image for directed web page.)",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://3.bp.blogspot.com/-qB4WT_Hr3Q4/Uhc87F2BcEI/AAAAAAAAG54/Rgk4F073ySc/s1600/USA+Map.PNG", //image URLs go here
         imageurl:"http://demographics.coopercenter.org/DotMap/index.html",
         imagedescription:"racialdotmap", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst018",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		    //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Do you have an idea that could make the world a better place? Ideas can range from improving our environment or our schools or solving some problem that you see around you, or just some crazy business ideas. You make a video and then link to it. You could win $1,000 with a great idea. Pitch it at: www.1000pitches.com",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://s7.postimg.org/q2awovfd7/1000_Pitches_Jpeg.png", //image URLs go here
         imagedescription:"1000piches", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst019",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 
		    //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"If you were given a choice to change your race for a day, what would you choose to do?",
         media:"video", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/ri61lBfMBu0",
         imagesource:"http://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", //image URLs go here
         imagedescription:"mj", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst020",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Tanning and lightening skin. What's it bring to mind?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://2.bp.blogspot.com/-En5bxooFWWM/T6KvrZjjksI/AAAAAAAAAkU/VVryV_nid10/s1600/2058_1336041784.jpg", //image URLs go here
         imagedescription:"ultimatetan", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst021",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Stop by a group meeting or the table/booth of an organization that you wouldn't normally be interested in and have a conversation for a few minutes, take a picture, tweet about it.",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://live.regnumchristi.org/wp-content/uploads/2012/02/conversation-1.jpg", //image URLs go here
         imagedescription:"conversion", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst022",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What was the most eye opening/truthful experience you've ever had?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://www.g4tinkmagazine.org/wp-content/uploads/2012/05/truth.jpg", //image URLs go here
         imagedescription:"truth", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst023",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What's it mean to be an 'American''?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://www.g4tinkmagazine.org/wp-content/uploads/2012/05/truth.jpg", //image URLs go here
         imagedescription:"truth", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst024",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Find someone who you think is racially ambiguous and guess their ancestry.",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"ancestry", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst025",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Submit a photo of the first image that comes to mind when you hear 'Muslim'.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"muslim", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst026",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Image of something in State College or at Penn State that  discourages diversity.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"sc", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst027",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What's a  stereotype you grew up holding but changed when you came to Penn State?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"muslim", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst028",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Try food that is from a different culture and that you have never eaten. Image of your reaction.",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://frigorificosmorales.com/blogrecetas/wp-content/uploads/2013/05/salpic%C3%B3n-pulpo.png", //image URLs go here
         imagedescription:"food", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst029",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Submit a photo of someone who is acting like a different culture than what they appear to be.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"differentculture", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst030",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Segregation in the Soc 119 class. WTF?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"segregation", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst031",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Take a photo with someone who looks like the 'future of the U.S.' according to this article.",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/QtTaq6y.png", //image URLs go here
         imageurl:"http://www.huffingtonpost.com/2013/10/01/national-geographic-changing-face-of-america-photos_n_4024415.html",
         imagedescription:"click", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst032",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		  
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Way in which where YOU grew up has had an effect on how you interact with race and racism?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst033",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Find or take a photo of someone who you think perfectly reflects the average member of some ancestry or cultural group.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst034",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Your image of the American Dream.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst035",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Who are you ... in one photo?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://www.mom-psych.com/Images/WhoAmI.jpg", //image URLs go here
         imagedescription:"fingerprint", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst036",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What would you like to ask someone in the &ldquo; one percent &rdquo;?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst037",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Stereotypes you see as being totally 100 percent accurate.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst038",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Biggest hurdle in your life you've had to overcome.",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://www.rajeshsetty.com/wp-content/uploads/Tulitomaatti-hurdle.jpg", //image URLs go here
         imagedescription:"hurdle", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst039",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What's the most accurate stereotype of your own culture?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst040",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What is the most important key to NOT becoming a jaded racist?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst041",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"How does the world look if you see “the man” as “a” man, as someone as thoughtful and complicated as everyone else?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"theman", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst042",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What is an idiom or phrase that people in your family use that can be traced to  your culture?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst043",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Give an example of a time when a stereotype affected an interaction you had.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst044",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Take a picture with someone whom you think embodies your ideal of beauty.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst045",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Take a photo with someone whom, at first glance, your family would think is suspicious.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst046",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Take a photo that represents your reaction to this article(Click on the picture for the article) ",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://www.slate.com/content/dam/slate/articles/double_x/doublex/2013/10/131014_DX_BingeDrinkingRapeCulture.jpg.CROP.promovar-mediumlarge.jpg", //image URLs go here
         imageurl:"http://www.slate.com/articles/double_x/doublex/2013/10/sexual_assault_and_drinking_teach_women_the_connection.html",
         imagedescription:"sexassault", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst047",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"How would you characterize gun culture?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst048",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Give an example of a time when you acted against your morals.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst049",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Post a picture of something from your culture that is <q>RATCHET</q>",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/umjucnt.png?1", //image URLs go here
         imagedescription:"ratchet", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst050",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Show us a picture of you conforming willingly.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst051",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Take a picture of yourself breaking a cultural norm? We will send a photo we want you to use for this one.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst052",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What do these two stories have in common? <br/> Links: <br/> http://edition.cnn.com/2013/09/29/world/meast/saudi-arabia-women-driving-cleric/        http://edition.cnn.com/2013/10/30/world/asia/china-female-drivers/index.html?hpt=hp_t3",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i2.cdn.turner.com/cnn/dam/assets/131030044201-china-car-driver-story-top.jpg", //image URLs go here
         imagedescription:"womandog", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst053",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Sit in the middle of this moral and political issue. What do you see?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/d4o2fhg.png?1", //image URLs go here
         imageurl:"http://edition.cnn.com/2013/10/30/opinion/europe-immigration-outsiders/index.html?hpt=hp_t5",
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst54",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"One reason why this would be a good idea in State College.",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/d4o2fhg.png?1", //image URLs go here
         imageurl:"http://www.maannews.net/eng/ViewDetails.aspx?ID=643647",
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst055",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 	 //Start Copying the Array Here
        {challengetype: "structured",  // options are "freeform", "structured"
         question:"<q>A costume is not offensive if it's NOT intended to be offensive.</q> Thoughts?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/kqV4gyH.jpg?1", //image URLs go here
         imagedescription:"mexicangrass", //this is the info that will accompany any photo
         answers:["Agree", "Not Sure", "Disagree"],//these are your answer options - you can name and call them anything
         answertags:["Agree", "Not Sure", "Disagree"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst056",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 	 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"One question that you'd like to ask people of another ancestry group.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst057",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What offensive idea to you hear the most often in your life?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst058",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Multiculturalism in the U.S. Take a photo that illuminates how you see it.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst059",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 	 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Use your best empathic skills and put yourself in one of these jobs. (go through the photos)",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/d4o2fhg.png?1", //image URLs go here
         imageurl:"http://www.takepart.com/photos/china-toy-factory-michael-wolf/wolf5?cmpid=tp-ad-outbrain-general",
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst060",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What could be a more offensive costume?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.huffpost.com/gen/1442696/thumbs/o-KKK-COSTUME-570.jpg?6", //image URLs go here
         imagedescription:"costume", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst061",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What do you say to your closest friends that would create problems for you if it became public?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/d4o2fhg.png?1", //image URLs go here
         imageurl:"http://www.huffingtonpost.com/2013/11/06/richie-incognito-racist-dolphins-teammates_n_4227099.html",
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst062",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Imagine some sports team mascots that we could have and that would be offensive.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst063",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"A stereotype that you actually can accept.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst064",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Break down a racial barrier.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst065",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"How are you helping to subjugate others?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i2.cdn.turner.com/cnn/dam/assets/131106024607-china-halloween-letter-story-top.jpg", //image URLs go here
         imagedescription:"letter", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst066",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What's the most offensive theme party you've heard of?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst067",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What is one think that immigrants have brought to your life and for which you are thankful?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst068",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Take a video of yourself talking in a way that depicts another racial or ancestry group.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst069",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Take a photo of someone you know is an immigrant just by looking at them. What is the tip off for you?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst070",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Photo of a stereotype about the United State that is actually quite true.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst071",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What would you do?",
         media:"video", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/OghL84kBrPk",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst072",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Read through the comments. What would you add?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/d4o2fhg.png?1", //image URLs go here
         imageurl:"http://www.latimes.com/books/jacketcopy/la-et-jc-library-users-should-go-back-to-mexico-says-official-who-wants-to-divert-library-funds-to-jails-20131114,0,7474904.story#axzz2kgma5F99",
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst073",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What would you <q>pray</q> for at this temple?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/d4o2fhg.png?1", //image URLs go here
         imageurl:"http://www.huffingtonpost.com/2013/11/17/virat-ramayan-mandir_n_4269863.html",
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst074",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What could lead you to risk your life to come to the U.S. to do low paying work?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst075",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Think of the stereotypes that you had of Sam on the first day of class. What about them are true?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst076",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Show us your close friends who are NOT in your racial or ethnic group?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst077",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What is the most derogatory word or phrase you hear stated by people? What makes it derogatory to you?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst078",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What's a single experience that forced you to reconsider your racial identity?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst079",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Show us which racial identity development stage you are at in a single photo.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst080",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"Show us how you define <q>terrorism</q>.",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst081",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What's your biggest regret regarding your ancestry, race, and/or culture?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst082",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 	 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What's holding you back from doing the thing that you love?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst083",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		  //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What's the most inappropriate thing you could say to a stranger of different ancestry? (Identify the ancestry.)",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst084",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"If grades really are not that important, then what is (important)?",
         media:"image", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://therebelchick.com/wp-content/uploads/2013/06/math-sucks.jpg", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst085",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What's the most accidentally offensive thing you ever done or said that pertains to race relations?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst086",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
		 //Start Copying the Array Here
        {challengetype: "freeform",  // options are "freeform", "structured"
         question:"What stopped you from being what you want to be when you <q>grow up</q>? ",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://i.imgur.com/UCKRgvG.png?1", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst087",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
         
       ];
