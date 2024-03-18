document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", addTask);
    inputBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        if (inputBox.value === '') {
            alert("Vous devez ajouter quelque chose!");
        } else {
            let li = document.createElement("li");
            li.textContent = inputBox.value;
            listContainer.appendChild(li);    
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            saveData(); // Enregistrer les données après chaque ajout de tâche
        }
        inputBox.value = ''; 
    }

    listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData(); // Enregistrer les données après chaque modification (cocher/décocher)
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData(); // Enregistrer les données après chaque suppression de tâche
        }
    }, false);

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("data") || ''; // Utilisation de la valeur par défaut si le stockage est vide
    }

    showTask();
});
