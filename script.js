
 function  loadData(){
$.ajax({
   url:"http://api.fixer.io/latest?base=USD",
   type: "GET",
   success: function(data){
       
    for (var element in data.rates) {
$("#pou").append("<option value ="+ data.rates[element] + ">"+ element + '</option>');
    }
       
   }
});

 }
function getData(){
    var selected = $('#pou :selected').text();

  
  $.ajax({
   url:"http://api.fixer.io/latest?base=USD",
   type: "GET",
   success: function(data){
       console.log(data['rates']);
       var kj = data['rates'];
       var value= kj[selected];
       var primary =$('#number').val();
       console.log(primary);
       if(primary!=0){
       var result =primary * value
   $('#resul').html(result);}
      
       
   }
});  
    
    
}


$(document).ready(function () {
 

    loadData();
    $("#number").on("input", getData);
   
});
