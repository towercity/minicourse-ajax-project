
function loadData() {
    //define page element variables
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    //take in user entered address
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ', ' + city;

    //change the greeting to match the entered text
    $greeting.text("So you're looking at " + address + "?");

    //add streetview background image
    var streetviewURL = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + ' ';
    $body.append('<img class="bgimg" src="' + streetviewURL + '">');

    //new york times AJAX request/print
    var nytURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + city + '&sort=newest&api-key=4134953ce7f541010d10595c16970556:12:74882553';
    $.getJSON(nytURL, function(data) {
        $nytHeaderElem.text("News about " + city + ":");

        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];

            console.log(articles[i].lead_paragraph);

            $nytElem.append('<li class="article"></li>');
            $(".article:last").append(
                '<a href="' + article.web_url + '">' +
                    article.headline.print_headline + '</a>' +
                '<p>' + article.snippet + '</p>'
            );
        }
    });

    return false;
};

$('#form-container').submit(loadData);
