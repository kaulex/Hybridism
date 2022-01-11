export function recupererLeStock () {
    const url = 'http://prcm.fr/HYBRIDISM/requete1.php'

    return fetch(url)
    .then((response) => response.json())
}

export function recupererLeStockCD () {
    const url = 'http://prcm.fr/HYBRIDISM/requete1.php'

    return fetch(url)
    .then((response) => response.json())
}

export function enleverUneUnite (idProduit) {
    const url = 'http://prcm.fr/HYBRIDISM/retirerUneUnite.php?idProduit=' + idProduit

    return fetch(url)
    .then((response) => response.json())
}

export function ajouterUneUnitePanier () {
    const url = 'http://prcm.fr/HYBRIDISM/ajouterUneUniteTotal.php'

    return fetch(url)
    .then((response) => response.json())
}

export function ajouterAuTotal () {
    const url = 'http://prcm.fr/HYBRIDISM/ajouterTotal.php'

    return fetch(url)
    .then((response) => response.json())
}

export function recupererLesCalculs () {
    const url = 'http://prcm.fr/HYBRIDISM/requeteCalculs.php'

    return fetch(url)
    .then((response) => response.json())
}