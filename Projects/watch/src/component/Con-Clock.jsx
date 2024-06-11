function Con_Clock(){
  let time = new Date();
  return(
    <div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, beatae. This is the current time:{time.toDateString()}-{time.toLocaleTimeString()}</p>
    </div>
  )
}
export default Con_Clock;