function Listitem(){
  let todo = "complete the course";
  let date = "09/2/2023";
  return(
    <div className="row">
    <div className="col-4">{todo}</div>
    <div className="col-4">{date}</div>
    <div className="col-2"><button type="button" className="btn btn-danger">Delete</button>
    </div>
  </div>
  )
}
export default Listitem;