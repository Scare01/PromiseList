// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

// document.addEventListener("DOMContentLoaded",
// function(){
//   console.log("dom load");
//   document.getElementById("#left_btn").addEventListener("click", function(){
//     console.log("@current_month");
//     // document.querySelector("#month_name").innerHTML = "<p>"+ @previous_month +"</p>"
//   })});

// Save checkbox value


document.addEventListener("DOMContentLoaded",
  function() {
  
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // var month_on_page = document.getElementById("current_month").innerHTML;
  
  

    
    for (var i = 0; i < month.length; i++) {
      if (month[i] === month_on_page) {
        document.getElementById("left_btn").addEventListener("click", function(){
          var month_on_page = document.getElementById("current_month").innerHTML = "Bla-Bla";
          
        })  
      }
       
    }
    
  
  })

  
  
  
  
 




