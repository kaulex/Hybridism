export function recupererLeStock () {
    const url = 'http://prcm.fr/APISPANDAX/requete1.php?destination=' + destination
    //const url = 'http://10.113.28.74/MONAPI/requete1.php?destination=' + destination

    return fetch(url)
    .then((response) => response.json())
}