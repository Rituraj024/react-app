const Errormsg =() =>{
  let Fooditem = ['Oats', 'Paneer', 'Mutton', 'Milk', 'Avacado','Brocoli']; 
  return(
    <>
     {Fooditem.length===0? <h3>It is vacant</h3>: null}
    </>
  )
}
export default Errormsg;