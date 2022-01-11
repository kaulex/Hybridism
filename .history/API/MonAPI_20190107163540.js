export function recupererLeStock () {
    const url = 'http://prcm.fr/HYBRIDISM/requete1.php'

    return fetch(url)
    .then((response) => response.json())
}

export function enleverUneUnite (aaa) {
    const url = 'http://prcm.fr/HYBRIDISM/retirerUneUnite.php?idProduit=' + aaa

    return fetch(url)
    .then((response) => response.json())
}