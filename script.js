

// Sélectionner les titres
const titres = document.querySelectorAll('h1, h2');

// Ajouter des animations sur les titres
titres.forEach(titre => {
  titre.style.transition = 'transform 0.5s ease-in-out';
  titre.addEventListener('mouseover', () => {
    titre.style.transform = 'scale(1.2)';
  });
  titre.addEventListener('mouseout', () => {
    titre.style.transform = 'scale(1)';
  });
});

// Fonction pour afficher une alerte lorsque vous cliquez sur un bouton

document.querySelector('button').addEventListener('click', function() {
  alert(' vous avez commander du beignet au lait !');
});

document.querySelector('button').addEventListener('click', function() {
  alert(' vous avez commander du beignet au chocolat  !');
});


document.querySelector('button').addEventListener('click', function() {
  alert(' vous avez commander du beignet au fromage !');
});


// Sélectionner le bouton
const bouton = document.querySelectorAll('aside button')[1];

// Ajouter un événement de clic sur le bouton
bouton.addEventListener('click', function() {
  alert('Vous avez cliqué sur le bouton de commande pour le Beignet au chocolat !');
});


