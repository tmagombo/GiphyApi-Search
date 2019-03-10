    var buttonItems = ["Basketball","Football","Dog", "Cat","Office","Funny"]
    for(var i = 0; i < buttonItems.length; i++){
          var button = $("<button>")
          button.attr("id", i)
          $("#buttonHolder").append(button);
          $("#"+i).text(buttonItems[i])
          $("#"+i).attr("data", buttonItems[i]+" fails")

    };

    $("#inputBtn").on("click", function(){
      var newItem = $("input").val()
      if(newItem.length!=0){
      var newButton = $("<button>")
      buttonItems.push(newItem);
      newButton.attr("id", newItem)     
      $("#buttonHolder").append(newButton);
      $("#"+newItem).text(newItem);
      $("#"+newItem).attr("data", newItem+" fails")
      }
    });


    $(document).on("click","button", function() {
            
        var data = $(this).attr("data");
        $("h3").text("Click on a gif to make it play!");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        data + "&api_key=2HeVKnuRCphKPs1yPflNIiTkD5ELe0Oa&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          console.log(queryURL);

          console.log(response);
          var results = response.data;

          for (var i = 0; i < results.length; i++) {

            var gifDiv = $("<div>");
            gifDiv.attr("id", i)
            var p = $("<p>").text("Rating: " + results[i].rating);

            var gifPic = $("<img>");

            gifPic.attr("src", results[i].images.fixed_height_still.url);
            gifPic.attr("data-still", results[i].images.fixed_height_still.url)
            gifPic.attr("data-animate", results[i].images.fixed_height.url)
            gifPic.attr("data-state", "still")
            gifPic.attr("id", );
            gifPic.attr("class", "gi");
            p.css("color","white")

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



    