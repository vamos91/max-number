//1- Déclarons un tableau d'entiers positifs
const numbers = [3, 23, 7, 8, 10, 11]

const findMaxNumber = (arrayOfNumbers) => {
    //2- J'assigne à une variable la valeur du premier élément du tableau
    //comme étant arbitrairement la plus grande.
    let lePlusGrand = arrayOfNumbers[0]

    //3- Celle-ci sera comparée à l'élément suivant dans le cadre de la boucle qui suit

    for (let index = 0; index < arrayOfNumbers.length; index++) {
        //4- Je compare chaque élément du tableau avec avec 'lePlusGrand'
        if (arrayOfNumbers[index] > lePlusGrand) {
            //5- Si la valeur d'un élément du tableau est plus grand qua la valeur contenue dans 'lePlusGrand'
            //alors on assigne à 'lePlusGrand' sa nouvelle valeur
            lePlusGrand = arrayOfNumbers[index]
        }
    }
    return lePlusGrand
}

console.log(findMaxNumber(numbers))
