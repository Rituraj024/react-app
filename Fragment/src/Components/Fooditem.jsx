function Fooditem(){
  let Fooditem = ['Oats', 'Paneer', 'Mutton', 'Milk', 'Avacado','Brocoli']; 
  return(
    <>
   
    <ul className="list-group">
        {Fooditem.map((items)=>(<li key={items} className="list-group-item">{items}</li>))}
      </ul>
      </>
  )
}
export default Fooditem;