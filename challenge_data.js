      //     
	  var challengeNumber = 37;
	 
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
         imagesource:"http://www.advicehow.com/wp-content/uploads/2012/06/Saftey-Net-Profiles-Google-Analytics.jpg", //image URLs go here
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
         question:"What would you like to say to someone in the ‘one percent’?",
         media:"none", //options are "image", "video", or "none" 
         videosource:"//www.youtube.com/embed/JzOJ3GtfTgM",
         imagesource:"http://4.bp.blogspot.com/_K7q0QX9ib3s/TSXNAMF-xUI/AAAAAAAAD6U/EnptP8gh2x4/s1600/mixed.jpg", //image URLs go here
         imagedescription:"na", //this is the info that will accompany any photo
         answers:["always", "sometimes", "never"],//these are your answer options - you can name and call them anything
         answertags:["always", "sometimes", "never"],//these are the tags that accompany the answer choice IF structured question is selected
         challengetag:"ycst037",//tag associated with the challenge
         primarytag:"soc119"},//this should always be soc119
		 //Stop Copying the Array Here
		 
         
       ];
