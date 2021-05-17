import React from 'react'
import BlockArticle from './Article'
function List() {

  return (
    <>
      <div className='row p-4'>
        <BlockArticle crypto={crypto} />
      </div>
    </>
  )
}

export default List
