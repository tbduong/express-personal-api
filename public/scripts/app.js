console.log("Sanity Check: JS is working!");
var template;
var $travelsList;
var allTravels = [];

$(document).ready(function(){

$travelsList = $('#target');

//comple handlebars template
var source = $("#travels-template").html();
template = Handlebars.compile(source);

$.ajax({
    method: 'GET',
    url: '/api/travels',
    success: handleSuccess,
    error: handleError
  });

  $('#newTravelForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/travels',
      data: $(this).serialize(),
      success: newTravelSuccess,
      error: newTravelError
    });
  });

  $travelsList.on('click', '.delete-btn', function() {
    $.ajax({
      method: 'DELETE',
      url: '/api/travels/'+$(this).attr('_id'),
      success: deleteTravelSuccess,
      error: deleteTravelError
    });
  });

  // function to render all posts to view
  // note: we empty and re-render the collection each time our post data changes
  function render () {
    // empty existing posts from view
    $travelsList.empty();
    // pass `allTravels` into the template function
    var travelsHtml = template({ travels: allTravels.travels});
    // append html to the view
    $travelsList.append(travelsHtml);
  }

  function handleSuccess(json) {
    allTravels = json;
    render();
  }

  function handleError(e) {
    console.log('!!!!uh oh!!!!');
    $('#travelTarget').text('!!!!Failed to load travel entries, is the server working?!!');
  }

  function newTravelSuccess(json) {
    $('#newTravelForm input').val('');
    allTravels.push(json);
    render();
  }

  function newTravelError() {

  }

  function deleteTravelSuccess(json) {
    var travel = json;
    var travelId = travel._id;
    // find the travel entry with the correct ID and remove it from our allBooks array
    for(var index = 0; index < allTravels.length; index++) {
      if(allTravels[index]._id === TravelId) {
        allTravels.splice(index, 1);
        break;  // we found our travel entry - no reason to keep searching (this is why we didn't use forEach)
      }
    }
    render();
  }

  function deleteTravelError() {

  }


});
