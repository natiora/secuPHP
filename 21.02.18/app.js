jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});     
$("document").ready(function()
    { 
      $("input").attr("required", "true");
      $( "#form" ).validate({
  rules: {
    nom: {
    required: true,
    minlength: 10,
    maxlength: 20
    }
  }
})
      })  ;
     /*  $("#nom").keyup(function(event)
       {
        $('#content').html(this.value);
       }) ;
    })  ;
       
*/


