$(document).ready(function(){
  $("#formOne").submit(function(){
    var person1Input = $("#person1").val();
    var person2Input = $("#person2").val();
    var animalInput = $("#animal").val();
    var exclamationInput = $("#exclamation").val();
    var animalNameInput = $("#animalName").val();
    var noun1Input = $("#noun1").val();
    var noun2Input = $("#noun2").val();
    var verbInput = $("#verb").val();
    var noun3Input = $("#noun3").val();
    var worldNameInput = $("#worldName").val();


    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".animalName").append(animalNameInput);
    $(".noun1").append(noun1Input);
    $(".noun2").append(noun2Input);
    $(".verb").append(verbInput);
    $(".noun3").append(noun3Input);
    $(".worldName").append(worldNameInput);

    $("#story").show();

    event.preventDefault();

  });
});