    
    
    $("button").on("click", function() {

      
      
        var data = $(this).attr("data");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        data + "&api_key=2HeVKnuRCphKPs1yPflNIiTkD5ELe0Oa&limit=8";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var gifDiv = $("<div>");
            gifDiv.attr("id", i)
            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var gifPic = $("<img>");

            gifPic.attr("src", results[i].images.fixed_height_still.url);
            gifPic.attr("data-still", results[i].images.fixed_height_still.url)
            gifPic.attr("data-animate", results[i].images.fixed_height.url)
            gifPic.attr("data-state", "still")
            gifPic.attr("id", );
            gifPic.attr("class", "gi");


            gifDiv.css("width", parseInt(results[i].images.fixed_height.width)+20);
            $("#gif"+i).css("width", parseInt(results[i].images.fixed_height.width)+20);


            gifDiv.append(p);
            gifDiv.append(gifPic);

            $("#gif"+i).html(gifDiv);
          }
        });
    });

    $("#gifs").on("click", "img", function(){
      var dataState = $(this).attr("data-state");
      console.log(dataState);
      if(dataState==="still"){
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      };

      if(dataState ==="animate"){
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");

      };
    });



    