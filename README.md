# Site de la MP* du lycée La Martinière Monplaisir

## Modifier les paramètres généraux (titre du site, logo...)

Dans [docusaurus.config.js](./docusaurus.config.js).

## Ajouter un document pour votre matière

Dans [docs/matiere](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/tree/main/docs).  
Chaque sous-dossier correspond à une catégorie (Cours, Exercice...).  
Les fichiers doivent être écrits en markdown (extension en .md) : [guide pour inclure image, titre, table...](https://www.markdownguide.org/basic-syntax).

Add file > New file pour créer un nouveau fichier dans le dossier actuel. Utiliser `/`dans le nom de fichier pour créer un dossier. Par exemple, `ìnformatique/intro.md` va créer un dossier `informatique` avec un fichier `intro.md` dedans.  
Cliquer sur le "crayon" pour éditer un fichier.  
Puis cliquer sur "commit changes" tout en bas.

Pour que les fichiers/dossiers apparaissent dans l'ordre que vous voulez, vous pouvez les numéroter (ex : 1_cours, 2_td, 3_ds...).

Vous pouvez aussi utiliser [ce lien](https://github.dev/mpstar-lamartin/mpstar-lamartin.github.io) pour éditer le site dans un éditeur.

Pour upload un document depuis votre ordinateur, cliquer sur Add files > Upload files.

## Génération du site

### Génération automatique en cas de push

Lorsque vous effectuez une modification, le site est automatique regénéré, ce qui peut prendre quelques minutes. Voir .github/workflows/deploy.yml.

Si une croix rouge apparaît, c'est qu'il y a eu une erreur (poster un message sur [issues](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/issues) ou me demander directement).

### Génération en local 

Voir https://docusaurus.io/docs

1. [Installer node](https://nodejs.org/en/download/package-manager)
2. npx docusaurus start

## Inclure un pdf avec preview

Pour inclure un pdf dans un fichier markdown, ajouter votre fichier.pdf (Add files > Upload files) dans le même dossier et, dans un fichier markdown, écrire ceci pour l'afficher : 
```
 <iframe src={require('./fichier.pdf').default} width="100%" height="1000"></iframe> 
```
Voir [un exemple](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/tree/16f01758462c8d19ad770f1618ec47c285bf3f8c/docs/math/2_Cours)

## Blog (actualité de la classe)

Créer un fichier dans [blog/](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/tree/main/blog), au format yyyy-mm-dd-titre.md.  
[Exemple](https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/blob/16f01758462c8d19ad770f1618ec47c285bf3f8c/blog/2022-09-01-rentree.mdx)

