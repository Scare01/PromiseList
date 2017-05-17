//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree 

document.addEventListener("DOMContentLoaded",
  function() {

    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var day_today = weekday[new Date().getDay()];



// Add current month on page
  for (var i=0; i < month.length; i++){
    if(i === new Date().getMonth()){
      document.getElementById("current_month").innerHTML = month[i];
    }
  }


// add full date to page
  var full_date_today = "Today is " + day_today + ", " + new Date().getDate() + " " + month[new Date().getMonth()] + " " + new Date().getFullYear() ;
  document.getElementById("date_today").innerHTML = full_date_today;

  // Change month to left side
    document.getElementById("left_btn").addEventListener("click",
      function(){
        document.getElementById("right_btn").disabled = false;
        for (var i = 0; i < month.length; i++) {
          var month_on_page = document.getElementById("current_month").innerHTML;
        if (month[i] === month_on_page) {
          var new_month = month[i-1];
        }
      }
      document.getElementById("current_month").innerHTML = new_month;
      month_on_page = new_month;

      if (month_on_page === "January"){
        document.getElementById("left_btn").disabled = true;
      }


    });
  // Change month to rigth side
    document.getElementById("right_btn").addEventListener("click",
    function(){
      document.getElementById("left_btn").disabled = false;
      for (var i = 0; i < month.length; i++) {
        var month_on_page = document.getElementById("current_month").innerHTML;
        if (month[i] === month_on_page) {
          var new_month = month[i+1];
        }
      }
      document.getElementById("current_month").innerHTML = new_month;
      month_on_page = new_month;

      if (month_on_page === "December"){
        document.getElementById("right_btn").disabled = true;
      }
    });

    // Add days
    var th = document.createElement("th");
      for (var i =1; i <= days_in_months[new Date().getMonth()]; i++){

        document.getElementById("days").innerHTML = th;
      }

  })
