class demarrage {
  constructor() {
    var nblignes = prompt("Combien de lignes ?");
    var nbcolonnes = prompt("Combien de colonnes ?");
    this.lancer(nblignes, nbcolonnes);
  }

  lancer(nblignes, nbcolonnes) {
    
    var boutonreset = document.createElement("button");
    var boutonrejoue = document.createElement("button");

    var h1 = document.createElement("h1");
    var p = document.createElement("p");


    var body = document.getElementsByTagName("body")[0];

    var tableau = document.createElement("table");
    var div = document.createElement("div");
    var tbody = document.createElement("tbody");
    tableau.style.backgroundColor = 'blue';
    tableau.style.borderRadius = "1cm";

    var joueuractuel = 1;
    var couleurjeton = "red";

    for (var i = 0; i < nblignes; i++) {
      var ligne = document.createElement("tr");

      for (var s = 0; s < nbcolonnes; s++) {
        var cellule = document.createElement("td");
        cellule.style.width = "90px";
        cellule.style.height = "90px";
        cellule.style.border = "3px solid blue";
        cellule.style.borderRadius = "4cm";
        cellule.style.cursor = "pointer";
        cellule.style.backgroundColor = "white";
        cellule.setAttribute('x', s);
        cellule.setAttribute('y', i);

        cellule.addEventListener("click", (event) => {
          var colonne = parseInt(event.target.getAttribute("x"));
          var ligne = parseInt(event.target.getAttribute("y"));

          while (ligne < nblignes - 1 && tbody.rows[ligne + 1].cells[colonne].style.backgroundColor === "white") {
            ligne++;
          }
          

          var cellulevide = tbody.rows[ligne].cells[colonne];
          if (cellulevide.style.backgroundColor === "white") {
            if (joueuractuel === 1) {
              cellulevide.style.backgroundColor = "red";
              joueuractuel = 2;
              couleurjeton = "yellow";
            } else {
              cellulevide.style.backgroundColor = "yellow";
              joueuractuel = 1;
              couleurjeton = "red";
            }
            if (this.aGagne(ligne, colonne, nblignes, nbcolonnes)) {
              if (couleurjeton === "red") {
                alert("Joueur 2 a gagné");
              } else {
                alert("Joueur 1 a gagné");
              }
            }
            
          }
          p.innerHTML=joueuractuel;

        });

        ligne.appendChild(cellule);
      }

      tbody.appendChild(ligne);
    }

    tableau.appendChild(tbody);
    body.appendChild(tableau);
    tableau.setAttribute("border", "4");
    boutonreset.style.width = "80px";
    boutonreset.style.height = "40px";
    boutonreset.style.marginLeft = "75%";
    var t = document.createTextNode("Reset la partie");
    boutonrejoue.style.width = "80px";
    boutonrejoue.style.height = "40px";
    boutonreset.style.marginLeft = "75%";
    var f = document.createTextNode("Rejoue le dernier ");

    boutonreset.appendChild(t);
    
    boutonrejoue.appendChild(f);
    
    h1.innerHTML="Au tour du joueur : ";
    p.innerHTML=joueuractuel;




    body.appendChild(h1);
    h1.appendChild(p);

    body.appendChild(boutonreset);    
    body.appendChild(boutonrejoue);

    boutonreset.addEventListener("click", (event) => {
      location.reload();
  alert("Partie reset");

    });
    
  }


  aGagne(ligne, colonne, nblignes, nbcolonnes) {
    var tbody = document.getElementsByTagName("tbody")[0];
    var couleurjeton = tbody.rows[ligne].cells[colonne].style.backgroundColor;

    for (var s = 0; s <= nbcolonnes - 4; s++) {
      if (tbody.rows[ligne].cells[s].style.backgroundColor === couleurjeton && tbody.rows[ligne].cells[s + 1].style.backgroundColor === couleurjeton && tbody.rows[ligne].cells[s + 2].style.backgroundColor === couleurjeton && tbody.rows[ligne].cells[s + 3].style.backgroundColor === couleurjeton) {
        return true;
      }
    }
    

    for (var i = 0; i <= nblignes - 4; i++) {
      if (tbody.rows[i].cells[colonne].style.backgroundColor === couleurjeton && tbody.rows[i + 1].cells[colonne].style.backgroundColor === couleurjeton && tbody.rows[i + 2].cells[colonne].style.backgroundColor === couleurjeton && tbody.rows[i + 3].cells[colonne].style.backgroundColor === couleurjeton) {
        return true;
      }
    }

    for (var i = 3; i < nblignes; i++) {
      for (var s = 0; s <= nbcolonnes - 4; s++) {
        if (tbody.rows[i].cells[s].style.backgroundColor === couleurjeton && tbody.rows[i - 1].cells[s + 1].style.backgroundColor === couleurjeton && tbody.rows[i - 2].cells[s + 2].style.backgroundColor === couleurjeton && tbody.rows[i - 3].cells[s + 3].style.backgroundColor === couleurjeton) {
          return true;
        }
      }
    }

    for (var i = 0; i <= nblignes - 4; i++) {
      for (var s = 0; s <= nbcolonnes - 4; s++) {
        if (tbody.rows[i].cells[s].style.backgroundColor === couleurjeton && tbody.rows[i + 1].cells[s + 1].style.backgroundColor === couleurjeton && tbody.rows[i + 2].cells[s + 2].style.backgroundColor === couleurjeton && tbody.rows[i + 3].cells[s + 3].style.backgroundColor === couleurjeton) {
          return true;
        }
      }
    }

    return false;
  }
  
  

}

new demarrage();
