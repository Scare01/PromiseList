//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree





<<<<<<< HEAD
document.addEventListener("DOMContentLoaded",
  function(){


// Add current month on page
  for (var i=0; i < month.length; i++){
    if(i === new Date().getMonth()){
      document.getElementById("current_month").innerHTML = month[i];
    }
  }

=======
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// var day_today = weekday[new Date().getDay()];



// document.addEventListener("DOMContentLoaded", function() {
  
  // Reload page for home button
    // document.getElementById("go_home").addEventListener("click", function(){
    // document.location.reload();
    // });
  
  // document.observe('dom:loaded', function() {

// Add current month on page
  // for (var i=0; i < month.length; i++){
  //   if(i === new Date().getMonth()){
  //     document.getElementById("current_month").innerHTML = month[i];
  //   }
  // }
 
>>>>>>> e80b437ad379fdf7e32e31c6e4cb4f80a17ea4f0

// add full date to page
  // var full_date_today = "Today is " + day_today + ", " + new Date().getDate() + " " + month[new Date().getMonth()] + " " + new Date().getFullYear() ;
  // document.getElementById("date_today").innerHTML = full_date_today;

// Change month to left side
    // document.getElementById("left_btn").addEventListener("click",
    //   function(){
    //     document.getElementById("right_btn").disabled = false;
    //     for (var i = 0; i < month.length; i++) {
    //       var month_on_page = document.getElementById("current_month").innerHTML;
    //       if (month[i] === month_on_page) {
    //         var new_month = month[i-1];
    //       }
    //     }
    //   document.getElementById("current_month").innerHTML = new_month;
    //   month_on_page = new_month;

    //   if (month_on_page === "January"){
    //     document.getElementById("left_btn").disabled = true;
    //   }
    // });
// Change month to rigth side
    // document.getElementById("right_btn").addEventListener("click",
    // function(){
    //   document.getElementById("left_btn").disabled = false;
    //   for (var i = 0; i < month.length; i++) {
    //     var month_on_page = document.getElementById("current_month").innerHTML;
    //     if (month[i] === month_on_page) {
    //       var new_month = month[i+1];
    //     }
    //   }
    //   document.getElementById("current_month").innerHTML = new_month;
    //   month_on_page = new_month;

    //   if (month_on_page === "December"){
    //     document.getElementById("right_btn").disabled = true;
    //   }
    // });

    // Add name of table
<<<<<<< HEAD
    var table = document.getElementById("prom-table");
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "Promises\\Day";


    //add days of month
    for (var i = 0; i < month.length; i++ ){
      var month_on_page = document.getElementById("current_month").innerHTML;

          if (month[i] === month_on_page){
            var days = days_in_month[i];
            for (var j =1; j <=days; j++){
              var cell = row.insertCell(j);
              cell.innerHTML = j;
            }
          }
    }


    document.getElementById("current_month").addEventListener("DOMSubtreeModified",
      function(){
        document.getElementById("prom-table").deleteTHead();

        // Add name of table
        var table = document.getElementById("prom-table");
        var header = table.createTHead();
        var row = header.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = "Promises\\Day";


        //add days of month
        for (var i = 0; i < month.length; i++ ){
          var month_on_page = document.getElementById("current_month").innerHTML;

            if (month[i] === month_on_page){
              var days = days_in_month[i];
              for (var j =1; j <=days; j++){
                var cell = row.insertCell(j);
                cell.innerHTML = j;
              }
            }
          }

      // document.getElementsByClassName("promise").
      //   function(){
      //     if (tr) {alert("new tr here!");}
      //   }



    });

  // Reload page for home button
    document.getElementById("go_home").addEventListener("click", function(){
     document.location.reload();
    });

    // DOMNodeInserted
=======
    // var table = document.getElementById("prom-table");
    // var header = table.createTHead();
    // var row = header.insertRow(0);
    // var cell = row.insertCell(0);
    // cell.innerHTML = "Promises\\Day";
    
    
    //add days of month 
    // for (var i = 0; i < month.length; i++ ){
    //   var month_on_page = document.getElementById("current_month").innerHTML;
      
    //       if (month[i] === month_on_page){
    //         var days = days_in_month[i];
    //         for (var j =1; j <=days; j++){
    //           var cell = row.insertCell(j);
    //           cell.innerHTML = j;
    //         }
    //       }
    // }  
    
    
    // document.getElementById("current_month").addEventListener("DOMSubtreeModified",function(){
    //   document.getElementById("prom-table").deleteTHead();
      
       // Add name of table
      // var table = document.getElementById("prom-table");
      // var header = table.createTHead();
      // var row = header.insertRow(0);
      // var cell = row.insertCell(0);
      // cell.innerHTML = "Promises\\Day";
    
    
      //   //add days of month 
      // for (var i = 0; i < month.length; i++ ){
      //   var month_on_page = document.getElementById("current_month").innerHTML;
      
      //     if (month[i] === month_on_page){
      //       var days = days_in_month[i];
      //       for (var j =1; j <=days; j++){
      //         cell = row.insertCell(j);
      //         cell.innerHTML = j;
      //       }
      //     }
      // } 
      
  // add days in each new row
    
    
    
    // document.getElementById("prom-table").addEventListener("DOMAttrModified", 
    //   function(){
    //     alert("added elemetn");
    //   });
      
    
    
    
      // for (var i = 1; i <= 10; i++){
      // var id_promise = "promise_number_" + i;
       
      // if(document.getElementById("id_promise").length > 0) {
      //   for (var i = 0; i < month.length; i++ ){
      //     var month_on_page = document.getElementById("current_month").innerHTML;
      
      //     if (month[i] === month_on_page){
      //       var days = days_in_month[i];
      //       for (var j =1; j <=days; j++){
      //         cell = row.insertCell(j);
      //         cell.innerHTML = j;
      //       }
      //     }
      //   }
      // }
       
      // } 
      
    
    
     
     
     
      // for (var i =1; i <= 10; i++ ){
      //   var id_promise = "promise_number_" + i;
      //   row = document.getElementById(id_promise);
      //   cell = row.insertCell(i)
        
      //   for (var i = 0; i < month.length; i++ ){
      //   var month_on_page = document.getElementById("current_month").innerHTML;
      
      //     if (month[i] === month_on_page){
      //       var days = days_in_month[i];
      //       for (var j =1; j <=days; j++){
      //         cell = row.insertCell(j);
      //         cell.innerHTML = j;
      //       }
      //     }
      //   }
      // }
      
      
      
    // });
    
  
 
    // DOMNodeInserted
    

  // })
>>>>>>> e80b437ad379fdf7e32e31c6e4cb4f80a17ea4f0


  })
