var player1_name = localStorage.getItem("Player 1");
var player2_name = localStorage.getItem("Player 2");

var score1 = 0;
var score2 = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("player1_score").innerHTML = score1;
document.getElementById("player2_score").innerHTML = score2;

document.getElementById("player_question").innerHTML = "Question Turn : " +  player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " +  player2_name;

function send()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var actual_answer = parseInt(number1) * parseInt(number2);

    var question_number = "<h4>" + number1 + "X" + number2 + "</h1>"
    var input_box = "<br>Answer: <input type='text' id='input_check_box'>"
    var check_button = "<br><br> <button class='btn btn-info' onclick='check();'>Check</button>"
    var row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
}