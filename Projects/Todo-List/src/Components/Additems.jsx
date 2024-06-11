
function Additems(){
  let todo ="Goto gym";
  let date = "06/05/24";
  return(
    <div className="row">
    <div className="col-4">{todo}</div>
    <div className="col-4">{date}</div>
    <div className="col-2"><button type="button" className="btn btn-danger">Delete</button>
    </div>
  </div>
  );
}
export default Additems;