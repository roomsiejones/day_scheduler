//add moment.js and display on calender

    var momentVar = moment().format("dddd, MMMM Do YYYY");
    
    //display current day at top of calendar
    function displayDate() {
        var currentDay = $("#currentDay").text(momentVar);
        return currentDay;
        
    }
    displayDate()

    // created a blank array to store the values of each id into
    var taskItem = []
    
    //retrieve saved items from local storage if there are values stored
    if (localStorage.getItem("items") !== null) {
       taskItem = JSON.parse(localStorage.getItem("items"));
       for (i = 0; i < taskItem.length; i++) {
            var hour = Object.keys(taskItem[i])[0];
            var text = taskItem[i][hour];
            $(".description").each(function() {
               if ($(this).attr("id") === hour) {
                   $(this).val(text);
               }
            })
        
       } 
    }


    //event listener added to the buttons to save to local storage into each id
    $(".saveBtn").click(
        function() {
            var text = $(this).siblings("textarea").val().trim();
            var hours = $(this).siblings("textarea").attr("id");
            var object = {};
            object[hours] = text;
            taskItem.push(object);
            localStorage.setItem("items", JSON.stringify(taskItem));

         }
    )


    //checks the id of the taskarea tags to compare to the current time value which I set to an hour as a var
    var currentHour = moment().hours();
    // used this to check my code by forcing the 'currenthour to be a forced value'
    // var currentHour = 11  

    $(".description").each(function() {
        var blockHour = parseInt($(this).attr("id"));
        // console.log(blockHour);
        if (currentHour > blockHour) {
            // utilized the built-in styles already
            $(this).addClass("past");
        } else if (currentHour === blockHour) {
            $(this).remove("past");
            $(this).addClass("present");
        } else if (currentHour < blockHour) {
            $(this).remove("past");
            $(this).remove("present");
            $(this).addClass("future");
        }
            

    });






