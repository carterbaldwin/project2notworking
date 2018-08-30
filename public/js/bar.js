// Get references to page elements
// var $exampleText = $("#example-text");

var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var $searchBtn = $("#search");
var $searchBar = $("#search-bar")


// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });

  },
  search: function(bar) {
    return $.ajax({
        url: "api/examples",
        type: "GET"
      });
  },
  saveBar: function(bar) {
      console.log("what is happening")
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/bars/:id",
      data: JSON.stringify(bar)
    });
  },
  // deleteExample: function(id) {
  //   return $.ajax({
  //     url: "api/examples/" + id,
  //     type: "DELETE"
  //   });
  // }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $html = $("<html>")
        .text(example.description);
        // .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($html);

      // var $button = $("<button>")
      //   .addClass("btn btn-danger float-right delete")
      //   .text("ｘ");

      // $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};


// The code below handles the case where we want to get blog posts for a specific author
  // Looks for a query param in the url for author_id
  var url = window.location.search;
  var barName;
  if (url.indexOf("?bar=") !== -1) {
    barName = url.split("=")[1];
    getPosts(barName);
  }
  // If there's no authorId we just get all posts as usual
  else {
    getPosts();
  }

  //WIP go for this to create route
  // This function grabs posts from the database and updates the view
  function getPosts(bar) {
    barName = bar || "";
    if (barName) {
      barName = "/?bar=" + barName;
    }
    $.get("/api/examples" + barName, function(data) {
      console.log("Posts", data);
      examples = data;
      if (!examples || !examples.length) {
        displayEmpty(author);
      }
      else {
        //initializeRows();
        //display index
      }
    });
  }

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     // text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   // if (!(example.text && example.description)) {
//   //   alert("You must enter an example text and description!");
//   //   return;
//   // }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   // $exampleText.val("");
//   $exampleDescription.val("");
// };

var handleFormSearch = function(event) {
    

          event.preventDefault();

    console.log("is this working")
    console.log(event)
    var bar = {
      name: $searchBar.val().trim()
      
    };
    console.log(bar.name)


  
    API.saveBar(bar).then(function() {
      //refreshExamples();
      // go to bar page
      //a href='/bar_id=" + bar.name + "'
      //window.location.replace("http://stackoverflow.com");

    });
  
    $searchBar.val("");
    console.log(bar.name)
  };



// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $searchBtn.on("click", handleFormSearch);

$("#search").on("click", handleFormSearch);

// $exampleList.on("click", ".delete", handleDeleteBtnClick);
