# custom-tab-tos

Ajoute des onglets interactifs personnalisés pour afficher les Conditions d’Utilisation en plusieurs langues, avec un affichage clair et dynamique.

## Utilisation

Utilisez ce HTML dans la page `/tos` ou dans une autre page :

```html
<div class="tab-tos-container">
  <div class="tab-tos-buttons">
    <div class="tab-tos active" data-tab-tos="tab-tos-1">Francais</div>
    <div class="tab-tos" data-tab-tos="tab-tos-2">Anglais</div>
  </div>

  <div class="tab-tos-content active" id="tab-tos-1">
    <p>Contenu en francais ici…</p>
  </div>
  <div class="tab-tos-content" id="tab-tos-2">
    <p>Contenu en anglais ici…</p>
  </div>
</div>