// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
  console.log("init");
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
  console.log("loaded");
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
  console.log('onYoutubeApiLoad');
  gapi.client.setApiKey('AIzaSyAmUyauzyBYWFHBuwNQwaEcVqeab2YJido');
}

// Called when the search button is clicked in the html code
function load() {
  var query = document.getElementById('query').value;
  // Use the JavaScript client library to create a search.list() API call.
  var request = gapi.client.youtube.search.list
  ({
      part: 'snippet',
      q:query,
  });

  // Send the request to the API server, call the onSearchResponse function when the data is returned
  request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
  var responseString = JSON.stringify(response, '', 2);
  // document.getElementById('response').innerHTML = responseString;
  console.log(responseString)


var results = responseString.items;

for (var i=0; i<results.length; i++){


  // Div for the Video? 
  var videoDiv = $("<div>");

  // P tag for title
  var p = $("<p>").text(results[i].snippet.title);

  //Video Tag
  var video = $("<video>");
  video.attr("src", results[i].snippet.medium.url);

  //append to holders
  videoDiv.append(p);
  videoDiv.append(video);

  //prepend the video to put-videos-here

  $("#put-videos-here").prepend(videoDiv); 


}};
