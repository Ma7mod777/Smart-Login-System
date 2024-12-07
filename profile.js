var welcomhead = document.getElementById("welcome");




var userName =   JSON.parse(localStorage.getItem("names"));


welcomhead.innerHTML = ` Welcome ${userName}  `;



