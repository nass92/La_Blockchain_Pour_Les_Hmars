import React from "react"
import ListArticle from "./articleList"
import { coines } from "./listcoin"

/*const BlockArticle = ({ crypto }) => {
  const tab = []
  if (crypto === ' ') {
    for (let i = 0; i < coins.length; i++) {
      tab.push(<ListArticle title={coins[i].title} text={coins[i].text} button={coins[i].liens} />)
    }
  } else {
    for (let i = 0; i < coins.length; i++) {
      if (coins[i].tags.startsWith(crypto))
        tab.push(<ListArticle title={coins[i].title} text={coins[i].text} button={coins[i].liens} />)
    }
  }


  return (tab.map(a => a))
}*/
const BlockArticle = ({ crypto }) => {
  const filteredCrypto = coines.filter((elem) => (
    elem.title.toLocaleLowerCase().includes(crypto.toLocaleLowerCase())
  ))
  return (

    filteredCrypto.map((elem) => (
      <ListArticle title={elem.title} text={elem.text} liens={elem.liens} />
    ))
  )
}

export default BlockArticle