# SereniPulse: Child's Peaceful Path

## [Lien vers SereniPulse](https://serenipulse.vercel.app/)

L'application de cohérence cardiaque conçue pour les plus jeunes (et pas que ..) propose une expérience ludique et apaisante, inspirée par l'esthétique d'un certain jeu vidéo de notre enfance. 
Les différentes technologies HTML, CSS, JavaScript sont utilisées pour créer une interface interactive et esthétiquement agréable.

----

## Classification detaillée des éléments et des leurs fonctionalités  :

## Timer et Gestion du Temps :

- Élément associé : #timer
- Fonctionnalité : Affiche le temps restant de la session de cohérence cardiaque.
- Détails techniques :
    - Utilisation de setInterval pour mettre à jour le timer chaque seconde.
    - Calcul des minutes et des secondes à partir du temps restant.
    - Affichage du temps formaté dans l'élément #timer.
    - Arrêt du timer une fois que le temps atteint zéro.

## Boutons de Lecture/Pause de la Musique :

- Éléments associés : #play, #pause
- Fonctionnalité : Contrôle la lecture et la pause de la musique d'ambiance.
- Détails techniques :
    - Écoute des événements click sur les boutons de lecture et de pause.
    - Affichage et masquage appropriés des boutons en fonction de l'état de lecture.
    - Utilisation des méthodes .play() et .pause() pour contrôler la musique.

### Sélection du Rythme de Respiration :

- Élément associé : #respiration
- Fonctionnalité : Permet à l'utilisateur de choisir un rythme de respiration.
- Détails techniques :
    - Écoute de l'événement change sur le sélecteur de rythme.
    - Utilisation d'une structure switch pour appliquer des classes CSS en fonction de la sélection.

### Sélection de la Durée de la Session :

- Élément associé : #compteur
- Fonctionnalité : Permet à l'utilisateur de choisir la durée de la session.
- Détails techniques :
    - Écoute de l'événement click sur le bouton "commencer".
    - Récupération de la valeur sélectionnée.
    - Utilisation d'une structure switch pour définir la durée de la session en fonction de la sélection.

### Bouton "Commencer" et Gestion de l'Animation :

- Élément associé : #start
- Fonctionnalité : Lance la session de cohérence cardiaque et active l'animation.
- Détails techniques :
    - Écoute de l'événement click sur le bouton "commencer".
    - Masquage du menu principal et affichage de l'animation.
    - Activation du timer et des animations de respiration.

### Bouton de Fermeture de la Session :

- Élément associé : .btnClose
- Fonctionnalité : Permet de fermer la session en cours et de revenir au menu principal.
- Détails techniques :
    - Écoute de l'événement click sur le bouton de fermeture.
    - Rechargement de la page pour réinitialiser l'interface.

### Gestion des Éléments Visuels de la Mascotte :

- Éléments associés : Différentes parties de la mascotte (left-cheek, right-cheek, left-eye, etc.)
- Fonctionnalité : Anime visuellement la mascotte pour refléter la respiration et le rythme choisis.
- Détails techniques :
    - Ajout et suppression de classes CSS pour appliquer les animations et les transformations.
    - Utilisation de classes spécifiques pour représenter les différents rythmes de respiration.

### Gestion des Événements Audio (On/Off) :

- Éléments associés : #iconOn, #iconOff
- Fonctionnalité : Active ou désactive la lecture de la musique d'ambiance.
- Détails techniques :
    - Écoute des événements click sur les boutons d'activation et de désactivation.
    - Utilisation de méthodes pour lire et mettre en pause l'audio.

### Interaction avec les Sélections et Démarrage de la Session :

- Détails techniques :
- Écoute des événements click ou change sur les différents éléments de sélection.
- Collecte des valeurs sélectionnées pour définir la durée de la session et le rythme de respiration.
- Démarrage du timer et des animations lorsque la session est lancée.

----
## Fonctionnalités 

### Interface Visuelle:

- Conçue avec des couleurs roses et des éléments graphiques qui rappellent le fameux jeu vidéo.
- Des éléments visuels comme les joues et les yeux ajoutent une touche amusante à l'expérience.

### Musique d'ambiance et Commandes Audio :

- L'utilisateur peut choisi d'activer la musique d'ambiance en appuyant sur le bouton de lecture.
- Des icônes stylisées représentent les commandes audio, avec son changement visuels lorsque la musique est activée ou désactivée.

### Sélection du Rythme de Respiration :

- L'utilisateur peut choisir parmi différents rythmes de respiration (6/4, 5/5, 4/6, 3/7) pour la pratique de la cohérence cardiaque.
- L'animation visuelle du rythme de respiration est représentée par la bouche de l'élément graphique, suivant le rythme choisi.

### Durée de la Session :

- L'utilisateur peut sélectionner la durée de la session de cohérence cardiaque parmi différentes options (1 à 5 minutes).
- Le timer est affiché à l'écran, indiquant le temps restant dans la session.


### Démarrage de la Session :

En cliquant sur le bouton "commencer", l'utilisateur lance la session de cohérence cardiaque.
L'animation visuelle se dévoile, avec une mascotte qui suit le rythme respiratoire et le timer.

### Bouton de Fermeture :

Un bouton de fermeture permet à l'utilisateur de revenir au menu principal à tout moment.

### Interaction et Jeu :

L'application propose une expérience interactive et engageante, incitant l'utilisateur à suivre le rythme de respiration de la mascotte.
Les éléments visuels réagissent au rythme respiratoire, créant une atmosphère de jeu amusante et relaxante.

### Intégration Audio :

L'application intègre des éléments audio pour la musique d'ambiance et les sons d'interaction.