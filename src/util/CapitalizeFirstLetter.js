

/*
Deixa a primeira letra de uma palavra em maísculo
*/
const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter;