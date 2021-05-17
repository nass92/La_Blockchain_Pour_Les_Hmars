import React from 'react'
import HomeSection from '../../HomeSection'
import { homeObjOne } from './Data'
import BlockArticle from '../Article/Article'
import Navbar from "../Navbar";
function Home() {
  const [crypto, setCrypto] = React.useState('')
  return (
    <>

      <Navbar setCrypto={setCrypto} />
      <HomeSection {...homeObjOne} />
      <div className='row p-4'>
        <BlockArticle crypto={crypto} />
      </div>
    </>
  )
}

export default Home