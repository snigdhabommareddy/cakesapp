import Navbar from "./Navbar"
function Userlist(){
    var users=["snigdha","charitha","nikitha","pavani","sravani"]
    var users1=[{name:"snigdha",exp:2,role:"lead"},{name:"charitha",exp:7,role:"lead manager"},{name:"nikitha",exp:5,role:"project manager"},{name:"pavani",exp:7,role:"lead manager"},{name:"sravani",exp:9,role:"senior manager"}]
    return(
        <div>
           {users.map((each)=>{
               console.log("hiiiiiii",each)
               return <input value={each}></input>
           })}
            {users.map((each)=>{
               console.log("hiiiiiii",each)
               return <Navbar owner={each}></Navbar>
           })}

           <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">exp</th>
      <th scope="col">role</th>
      
    </tr>
  </thead>
  <tbody>
   {users1.map((each)=>{
       return <tr>
           <td>{each.name}</td>
           <td>{each.exp}</td>
           <td>{each.role}</td>
           
    
       </tr>
   })}
  </tbody>
</table>
        </div>
    )
        
}
export default Userlist