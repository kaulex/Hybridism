export function recupererLeStock () {
    const url = 'http://prcm.fr/HYBRIDISM/requete1.php'

    return fetch(url)
    .then((response) => response.json())
}

export function enleverUneUnite () {
    const url = 'http://prcm.fr/HYBRIDISM/requete1.php'

    return fetch(url)
    .then((response) => response.json())
}