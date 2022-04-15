window.addEventListener('load', () => {

    var name = localStorage.getItem('NAME');
    var name2 = localStorage.getItem('NAME2');

    document.getElementById("plrName1").innerHTML = name;
    document.getElementById("plrName2").innerHTML = name2;

})

var btn = "";
var checker = "x";


function game_play(btn) {

    if (btn.value = " ") {
        btn.value = checker;
    }
    if (checker == "x") {
        checker = "o";
    } else {
        checker = "x";
    }


    b1 = document.getElementById("button1").value;
    b2 = document.getElementById("button2").value;
    b3 = document.getElementById("button3").value;
    b4 = document.getElementById("button4").value;
    b5 = document.getElementById("button5").value;
    b6 = document.getElementById("button6").value;
    b7 = document.getElementById("button7").value;
    b8 = document.getElementById("button8").value;
    b9 = document.getElementById("button9").value;


    var q = parseInt(document.getElementById("playerX").value);
    var p = parseInt(document.getElementById("playerO").value);

    if (b1 == 'x' && b2 == 'x' && b3 == 'x' || b4 == 'x' && b5 == 'x' && b6 == 'x' || b7 == 'x' && b8 == 'x' && b9 == 'x' || b1 == 'x' && b4 == 'x' && b7 == 'x' || b2 == 'x' && b5 == 'x' && b8 == 'x' || b3 == 'x' && b6 == 'x' && b9 == 'x' || b1 == 'x' && b5 == 'x' && b9 == 'x' || b3 == 'x' && b5 == 'x' && b7 == 'x') {

        q = q + 2;
        document.value_tran.playerX.value = q;
        p = p + 1;
        document.value_tran.playerO.value = p;

        alert("You get 2 points");

        var px_value = document.getElementById("playerX").value;
        var po_value = document.getElementById("playerO").value;
        if (px_value >= 5) {
            alert('player x win');
            new_game();
        } else if (po_value >= 5) {
            alert("player o win");
            new_game();
        }


    }

    if (b1 == 'o' && b2 == 'o' && b3 == 'o' || b4 == 'o' && b5 == 'o' && b6 == 'o' || b7 == 'o' && b8 == 'o' && b9 == 'o' || b1 == 'o' && b4 == 'o' && b7 == 'o' || b2 == 'o' && b5 == 'o' && b8 == 'o' || b3 == 'o' && b6 == 'o' && b9 == 'o' || b1 == 'o' && b5 == 'o' && b9 == 'o' || b3 == 'o' && b5 == 'o' && b7 == 'o') {

        p = p + 2;
        document.value_tran.playerO.value = p;

        q = q + 1;
        document.value_tran.playerX.value = q;
        alert("You get 2 points");

        var px_value = document.getElementById("playerX").value;
        var po_value = document.getElementById("playerO").value;
        if (px_value >= 5) {
            alert('player x win');
            new_game();
        } else if (po_value >= 5) {
            alert("player o win");
            new_game();
        }

    }

}




function btnClear() {

    document.value_tran.button1.value = " ";
    document.value_tran.button2.value = " ";
    document.value_tran.button3.value = " ";
    document.value_tran.button4.value = " ";
    document.value_tran.button5.value = " ";
    document.value_tran.button6.value = " ";
    document.value_tran.button7.value = " ";
    document.value_tran.button8.value = " ";
    document.value_tran.button9.value = " ";
    alert("Reset Data");

}

function new_game() {
    document.value_tran.playerX.value = "0";
    document.value_tran.playerO.value = "0";
    alert("start new game");
    btnClear();
}