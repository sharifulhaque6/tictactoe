function showValue() {
    var name = document.getElementById('first').value;
    var name2 = document.getElementById('second').value;

    localStorage.setItem('NAME', name);
    localStorage.setItem('NAME2', name2);


    // document.getElementById('ans').innerHTML = name;
    // document.getElementById('ans2').innerHTML = name2;

    // window.location.href = "game.html";

}