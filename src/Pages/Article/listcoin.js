export const coines = [
  {
    title: "Bitcoin",
    text: "Le bitcoin, une crypto-monnaie créée par Satoshi Nakamoto en 2008. C'est un réseau de paiement novateur et une nouvelle forme d'argent.",
    tags: "bitcoin",
    liens: "https://bitcoin.fr/qu-est-ce-que-bitcoin/"
  },
  {
    title: "ETHEREUM",
    text: "Ethereum est une plate-forme monétaire globale et décentralisée qui propose également de nouveaux types d'applications.",
    tags: "ethereum",
    liens: "https://www.ethereum-france.com/quest-ce-que-lethereum/"
  },

  {
    title: "La Blockchain",
    text: "La blockchain, peut être comparée à un grand livre numérique. Des données sont alors ajoutées en temps réel et sont visibles par tous les participants.",
    tags: "blockchain",
    liens: "https://cryptoast.fr/qu-est-ce-que-la-blockchain/"
  },
  {
    title: "Les Token ERC-20",
    text: "Un jeton ERC-20, ou ERC-20 token en anglais, est jeton standard créé et échangé sur la plateforme Ethereum. ",
    tags: "erc20",
    liens: "https://cryptoast.fr/qu-est-ce-que-token-erc20/"
  },
  {
    title: "NFT",
    text: "Les NFT sont uniques et identifiables. Ainsi, deux jetons créés auront des caractéristiques spécifiques pour les définir.",
    tags: "nft",
    liens: "https://cryptoast.fr/non-fungible-token-nft-ou-token-non-fongible/"
  },


  {
    title: "ICO",
    text: "Une ICO est une méthode de levée de fonds, fonctionnant via l’émission d’actifs numériques  durant la phase de démarrage d’un projet.",
    tags: "ico",
    liens: "https://bitconseil.fr/ico-levees-de-fonds-cryptomonnaies/"
  },
  {
    title: "BinanceCoin",
    text: "Binance Coin est la crypto monnaie de la bourse d’échange Binance. Elle permet à la plateforme et à ses opérants d'établir un écosystème durable",
    tags: "binancecoin",
    liens: "https://coin24.fr/binance-coin/"
  },
  {
    title: "Monero",
    text: "Le Monero, est une cryptomonnaie focalisée sur l'anonymat, dont les transactions sont rendues intraçables et 100% anonyme.",
    tags: "monero",
    liens: "https://cryptoast.fr/fiche-monero/"
  },
  {
    title: "Ripple",
    text: "Ripple fournit un protocole de paiement aux institutions financières. Il permet un transfert de valeur transparent en $ ou en crypto. ",
    tags: "ripple",
    liens: "https://coin24.fr/ripple/"
  },
  {
    title: "Cardano",
    text: "Cardano est une blockchain open source, décentralisée ainsi qu'une plateforme permettant d'exécuter des smart-contracts. ",
    tags: "cardano",
    liens: "https://coin24.fr/cardano/"
  },
  {
    title: "Dogecoin",
    text: "Le Dogecoin a été créé en tant que « blague ». Son but était de se moquer des autres crypto. Mais les choses ne se sont pas passées comme prévu. ",
    tags: "dogecoin",
    liens: "https://cryptoast.fr/fiche-dogecoin-doge/"
  },
  {
    title: "Polkadot",
    text: "Polkadot est un protocole de nouvelle génération qui unit un réseau de plusieurs blockchains interconnectées.  ",
    tags: "polkadot",
    liens: "https://cryptoast.fr/polkadot-dot/"
  },
  {
    title: "Uniswap",
    text: "Uniswap est un protocole ouvert à tous les utilisateurs Ethereum pour permettre de réaliser des swaps de tokens. ",
    tags: "uniswap",
    liens: "https://cryptoast.fr/uniswap-ethereum-protocole-echange-tokens/"

  },



]
export const alltags = (list) => {
  /* retourner la liste des tags uniques */
  let listTotal = []
  for (let element of list) {
    if ("tags" in element) {
      listTotal = listTotal.concat(element.tags)
    }
  }
  const listtagsUnique = []
  listTotal.forEach((el) => {
    if (!listtagsUnique.includes(el)) {
      //listtagsUnique = listtagsUnique.concat([el])
      listtagsUnique.push(el)
    }
  })
  return listtagsUnique
}

export const uniquetags = alltags(coines)



export default coines