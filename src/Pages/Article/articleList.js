
const handleLinkButton = (e) => {
  console.log(e.target.value)
}
const ListArticle = ({ title, text, liens }) => {

  return (
    <div className="col p-4" >
      <li className="col-lg-3 col-md-4 col-sm-6 list-group">
        <div className="card p-4 mb-4 shadow ">

          <h2 className='text-center'>{title} </h2>
          <p>{text}</p>
          <a href={liens}><button type="button" className='btn btn-sm me-2 mb-2 bg-dark text-white' value={liens} onClick={handleLinkButton} >lire plus </button></a>
        </div>
      </li>
    </div>
  )
}
export default ListArticle