//1- Déclarons un tableau d'entiers positifs
const numbers = [3, 23, 7, 8, 10, 11]

//2- J'assigne à une variable la valeur du premier élément du tableau
//comme étant arbitrairement la plus petite.
let lePlusGrand = numbers[0]

//3- Celle-ci sera comparée à l'élément suivant dans le cadre de la boucle qui suit

for (let index = 0; index < numbers.length; index++) {
    //4- Je compare chaque élément du tableau avec avec le premier élément
    if (numbers[index] > lePlusGrand){
        //5- Si la valeur d'un élément du tableau est plus grand qua la valeur contenue dans 'lePlusGrand'
        //alors on assigne à 'lePlusGrand' sa nouvelle valeur
        lePlusGrand = numbers[index]
    }
}

console.log(lePlusGrand)
