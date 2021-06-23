// storing the variable of the current day and time to callback later and push to the page
    let momentVar = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    
    //displays the current day at the top of the hourly to-do list
    function showDate() {
        let currentDay = $("#currentDay").text(momentVar);
        return currentDay;
        
    }
    showDate();


