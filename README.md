# Site de la MP* du lycée La Martinière Monplaisir

Site généré avec https://docusaurus.io

## Génération du site

### Génération automatique en cas de push

Lorsque vous effectuez une modification, le site est automatique regénéré, ce qui peut prendre quelques minutes. Voir .github/workflows/deploy.yml.

Si une croix rouge apparaît, c'est qu'il y a eu une erreur (poster un message sur [issues](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/issues) ou me demander directement).

### Génération en local 

Voir https://docusaurus.io/docs

1. [Installer node](https://nodejs.org/en/download/package-manager)
2. npm run start

## Inclure un pdf avec preview

Pour inclure un pdf dans un fichier markdown, ajouter votre fichier.pdf (Add files > Upload files) dans le même dossier et, dans un fichier markdown, écrire ceci pour l'afficher : 
```
 <iframe src={require('./fichier.pdf').default} width="100%" height="1000"></iframe> 
```
Voir [un exemple](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/tree/16f01758462c8d19ad770f1618ec47c285bf3f8c/docs/math/2_Cours)

## Blog (actualité de la classe)

Créer un fichier dans [blog/](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/tree/main/blog), au format yyyy-mm-dd-titre.md.  
[Exemple](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/blob/16f01758462c8d19ad770f1618ec47c285bf3f8c/blog/2022-09-01-rentree.mdx)

