console.log("Bienvenue dans la To-Do List !");

//Sélection des éléments
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");
const tasksCount = document.getElementById("tasksCount");
const completedCount = document.getElementById("completedCount");
const searchInput = document.getElementById("searchInput");

//Tableau des tâches
let tasks = [];

//LocalStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) tasks = JSON.parse(saved);
}

//Fonctions principales
function ajouterTache() {
  const texte = taskInput.value.trim();
  if (texte === "") {
    alert("Veuillez entrer une tâche !");
    return;
  }
  //Vérifier si la tâche existe déjà
  const existe = tasks.some(task => task.texte.toLowerCase() === texte.toLowerCase());
  if (existe) {
    alert("Cette tâche existe déjà !");
    return;
  }
  const nouvelleTache = { texte, completed: false };
  tasks.push(nouvelleTache);
  saveTasks();
  taskInput.value = "";
  taskInput.focus();
  afficherTaches();
}

function supprimerTache(index) {
  tasks.splice(index, 1);
  saveTasks();
  afficherTaches();
}

function terminerTache(index) {
  tasks[index].completed = true; // ✅ ne permet plus de re-cliquer
  saveTasks();
  afficherTaches();
}

//tout supprimer 
function supprimerToutesTaches() {
  if (confirm("Voulez-vous vraiment supprimer toutes les tâches ?")) {
    tasks = [];
    saveTasks();
    afficherTaches();
  }
}

//Afficher les tâches + compteurs + filtrage 
function afficherTaches() {
  taskList.innerHTML = "";
  const searchTerm = searchInput.value.toLowerCase();
  let enCours = 0;
  let terminees = 0;

  tasks.forEach((task, index) => {
    if (!task.texte.toLowerCase().includes(searchTerm)) return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task.texte;
    li.appendChild(span);

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Déjà terminée" : "Terminer";
    completeBtn.classList.add("complete");

    if (task.completed) {
      li.classList.add("completed");
      terminees++;
      completeBtn.disabled = true; // ✅ désactive le bouton si déjà terminé
    } else {
      enCours++;
      completeBtn.addEventListener("click", () => terminerTache(index));
    }

    li.appendChild(completeBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", () => supprimerTache(index));
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });

  tasksCount.textContent = `${enCours} tâche(s) en cours`;
  completedCount.textContent = `${terminees} tâche(s) terminée(s)`;
}

//ajouterTache/supprimerToutesTaches/afficherTaches
addBtn.addEventListener("click", ajouterTache);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") ajouterTache();
});
clearAllBtn.addEventListener("click", supprimerToutesTaches);
searchInput.addEventListener("input", afficherTaches);

//Initialisation
loadTasks();
afficherTaches();
