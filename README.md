# auth-laravel-vuejs

Système d'authentification Vuejs et laravaver

## Initialisation du projet

```sh
git clone https://github.com/carteur007/auth-laravel-vuejs.git
```

## Configuration de la base de données.

```env
DB_CONNECTION=sqlite
DB_DATABASE=/home/carteur/works/laravel/auth-laravel-vuejs/database/database.sqlite
DB_FOREIGN_KEYS=true
```

## Installation des dépendances du client vue et lancement du server vite pour le client Vue.

```sh
cd vue
npm install && npm run dev
```

## Lancer le server backend pour Laravel

```sh
php artisan serve
```
