
function loadData() {
    //define page element variables
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    //take in user entered address
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ', ' + city;

    //change the greeting to match the entered text
    $greeting.text("So you're looking at " + address + "?");

    //add streetview background image
    var streetviewURL = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + ' ';
    $body.append('<img class="bgimg" src="' + streetviewURL + '">');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
