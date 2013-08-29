  /* User Agent Sensing */
  var ua = navigator.userAgent;
  var checker = {
    ios: ua.match(/(iPhone|iPod|iPad)/),
    blackberry: ua.match(/BlackBerry/),
    android: ua.match(/Android/),
    windowsphone: ua.match(/Windows Phone/)             
  }   
	
    // FREE-FORM iOS-specific Instagram WhichButton loop
    function fillInstaGramFreeForm(whichButton){
      window.location = 'instagram://camera?caption=%23' + challenge[challengeNumber].primarytag.toString() + ' %23' + challenge[challengeNumber].challengetag.toString();
    }
       
    // STRUCTURED iOS-specific Instagram WhichButton loop
    function fillInstaGramStructured(whichButton){
      window.location = 'instagram://camera?caption=%23' + challenge[challengeNumber].primarytag.toString() + ' %23' + challenge[challengeNumber].challengetag.toString() + ' %23' + challenge[challengeNumber].answertags[Number(whichButton.id)].toString();
     }
	
    // Function to build the shared header of question and image/video
    function buildChallengeHeader(html) {
      html += '<div id="challenge">';

      // QUESTION AND MEDIA HEADER
      html += '<p class="statement"><span class="question">Q:</span>' + challenge[challengeNumber].question + '</p>';
	
	  //Video or image presentation here-->
      if (challenge[challengeNumber].media == "video") {
	    html += '<div class="video-container">';
        html += '<iframe width="425" height="315" src="' + challenge[challengeNumber].videosource + '" frameborder="0" allowfullscreen></iframe>';
        html += '</div>';
      }
       if (challenge[challengeNumber].media == "image") {
        html += '<center><a href="' + challenge[challengeNumber].imageurl + '"><img src="' + challenge[challengeNumber].imagesource + '" alt="' + challenge[challengeNumber].imagedescription +'" /></a></center>';
      }
        html += '</div>';  //End Challenge Div-->
		return html;
	} // End function to build header-->

    // Build the Nav Footer
    function build_footer(){
	  var html = '<div data-role="navbar" data-theme="c" class="custom-navbar">';
	  html += '<ul>';
      html += '<li><a href="https://twitter.com/search?q=%23' + challenge[challengeNumber].primarytag.toString() + '%20%23' + challenge[challengeNumber].challengetag.toString() + '&src=hash" target="_blank">Follow the Conversation</a></li>';
      //html += '<li><a href="http://web.stagram.com/tag/' + challenge[challengeNumber].challengetag.toString() + '/">Instagram</a></li>';
	  html += '</ul>';
	  html += '</div>';
	
	  document.getElementById("footerNav").innerHTML = html;
	  $("#footerNav").trigger("create");
    }

    // Dynamically Close Left Panel onclick
	function close_panel(){
		$( "#leftpanel" ).panel( "close" );
	}
  
  
  
  
  function build_challenge(){	
  
  document.getElementById("mainContent").innerHTML = "";
  
    var html = "";
	

    // LOGIC STARTS HERE
          
    // FREE-FORM CHALLENGE
   if (challenge[challengeNumber].challengetype == 'freeform') {
   
      // Call the header 
      html = buildChallengeHeader(html);      

        // Call the dynamic response content
          html += '<div class="freeFormResponseContainer">';
          html += '<div class="center">';
  
          /*Twitter*/
          html +='<a href="https://mobile.twitter.com/compose/tweet?&status=%23' + challenge[challengeNumber].primarytag.toString() + ' %23' + challenge[challengeNumber].challengetag.toString() + '" target="_blank"><img src="images/twitter_icon.png" alt="Twitter Icon" /></a>';

          /*Instagram*/
            /*If the device is iOS-based*/
           if (checker.ios) {
              html += '<img src="images/instagram_icon.png" alt="Instagram Icon" id="InstaGram" onclick="javascript:fillInstaGramFreeForm(this);"/>';

            html += '</div>'; // Close center div
            html += '</div>'; // Close free form response container div
            } //Close iOS Checker If Statement

            /*If the device is Android-based*/
           else if (checker.android) {
              html += '<a href="#androidInstagramPopup" data-rel="popup"><img src="images/instagram_icon.png" /></a>';
             
              html += '<div data-role="popup" id="androidInstagramPopup">';
              html += '<p>If you already have the native instagram app installed on your android device, please use the following tags to respond: <strong>#' + challenge[challengeNumber].primarytag.toString() + ' #' + challenge[challengeNumber].challengetag.toString() +  '</strong></p>';
              html += '<p><a href="http://instagram.com" target="_blank">Go to the Instagram Site</a></p>';
              html += '<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>';
              html += '</div>';
            }
      } // END FREE-FORM CHALLENGE


      // STRUCTURED CHALLENGE
      else if (challenge[challengeNumber].challengetype == "structured") {
        
        // Call the header -->
        html = buildChallengeHeader(html);     

        // Build Responses-->
        html += '<div data-role="collapsible-set" data-content-theme="d" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d">';

         //Print Responses as Individual Collapsible Sets-->
         var arrayCount = challenge[challengeNumber].answers.length;

         for (var i=0; i < arrayCount; i++)
          {
            html += '<div data-role="collapsible">';
            html += '<h3>' + challenge[challengeNumber].answers[i] + '</h3>';

              /*Twitter*/ 
              html += '<a href="https://mobile.twitter.com/compose/tweet?&status=%23' + challenge[challengeNumber].primarytag.toString() + ' %23' + challenge[challengeNumber].challengetag.toString() + ' %23' + challenge[challengeNumber].answertags[i].toString() + '" target="_blank"><img src="images/twitter_icon.png"></a>';

              /*Instagram*/
              /*If the device is iOS-based*/
			  
              if (checker.ios) {
                html += '<img src="images/instagram_icon.png"  id='+ i.toString() + '  onclick="javascript:fillInstaGramStructured(this);" />';
              } 

              /*If the device is Android-based*/
              else if (checker.android) {
                html += '<a href="#androidInstagramPopup" data-rel="popup"><img src="images/instagram_icon.png" /></a>';
             
                html += '<div data-role="popup" id="androidInstagramPopup">';
                html += '<p>If you already have the native instagram app installed on your android device, please use the following tags to respond: <strong>#' + challenge[challengeNumber].primarytag.toString() + ' #' + challenge[challengeNumber].challengetag.toString() + ' #' + challenge[challengeNumber].answertags[i].toString() +  '</strong></p>';
                html += '<p><a href="http://instagram.com" target="_blank">Go to the Instagram Site</a></p>';
                html += '<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>';
                html += '</div>';
                }

             html += '</div>';  //End Collapsable Data Area
           } // End for loop

        } // END STRUCTURED CHALLENGE


    // Return the content to the html page
	document.getElementById("mainContent").innerHTML = html;
	$("#mainContent").trigger("create");
	$("#leftpanel").trigger("create");
	$("#rightpanel").trigger("create");
	
	build_footer();
	  
}  //End Render Challenge Function





  window.onload = function(){build_challenge();};
