export function recupererLeStock () {
    const url = 'http://prcm.fr/APISPANDAX/requete1.php'

    return fetch(url)
    .then((response) => response.json())
}