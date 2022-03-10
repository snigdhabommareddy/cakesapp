import axios from "axios"
import {useState} from "react"
import { Link } from "react-router-dom"
function Addcake(){
    let[image,setImage]=useState();
    let[name,setName]=useState();
    let[price,setPrice]=useState();
    let[weight,setWeight]=useState();
    let[flavour,setFlavour]=useState();
    let[description,setDescription]=useState();
    let[eggless,setEggless]=useState();
    let[ingredients,setIngredients]=useState();
    let[type,setType]=useState();
    var cakedetails={price,name,weight,image,type,description,flavour,eggless,ingredients}
    function fileChangedHandler(event) {
    let formData = new FormData()
    let file = event.target.files[0]
    formData.append("file", file);
    console.log(file)
    axios({
        method: 'post',
        url: 'https://apifromashu.herokuapp.com/api/upload',
        data: formData,
        headers: {
            "authtoken": localStorage.token
        },
    }).then((response) => {
        if (response) {
            console.log(response.data.imageUrl)
            setImage(response.data.imageUrl)
        }
    }, (error) => {
        console.log(error);
    })
}
function handleName(event){
    var name1=event.target.value
    setName(name1)
  }
  function handlePrice(event){
    var price1=event.target.value
    setPrice(price1)
  }
  function handleWeight(event){
    var weight1=event.target.value
    setWeight(weight1)
  }
  function handleDescription(event){
    var description1=event.target.value
    setDescription(description1)
  }
  function handleFlavour(event){
    var flavour1=event.target.value
    setFlavour(flavour1)
  }
  function handleEggless(event){
    var eggless1=event.target.checked
    setEggless(eggless1)
  }
  function handleIngredients(event){
    var ingredients1=event.target.value
    setIngredients(ingredients1)
  }
  function handleType(event){
    var type1=event.target.value
    setType(type1)
  }
 function handleAddcake(event){
     event.preventDefault()
        axios({
            method: 'post',
            url: 'https://apifromashu.herokuapp.com/api/addcake',
            data: cakedetails,
            headers: {
                "authtoken": localStorage.token
            },
        }).then((response) => {
            console.log("response addcake", response)
        }, (error) => {
            console.log("upload error",error);
        })
         
    }
    return(
        <div>
            <h4>Add Cake</h4>
            <form class="row g-3">
            <div class="col-12">
    <label for="inputAddress2" class="form-label">Cake image</label>
    <input onChange={fileChangedHandler}type="file" class="form-control" id="inputAddress2" placeholder="choose file"/>
  </div>
  <div class="col-md-6">
    <label for="inputname" class="form-label">Cake Name</label>
    <input onChange={handleName}type="text" class="form-control" id="inputname" placeholder="cake name"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Price</label>
    <input onChange={handlePrice} type="text" class="form-control" id="inputPrice"placeholder="cake price"/>
  </div>
  <div class="col-12">
    <label for="inputdescription" class="form-label">Description</label><br/>
    <textarea style={{borderRadius:"5px"}} onChange={handleDescription} id="w3review" name="w3review" rows="3" cols="93"/>  
  </div>
  
  <div class="col-md-6">
    <label for="inputweight" class="form-label">Weight(Kg)</label>
    <input onChange={handleWeight}type="text" class="form-control" id="inputweight"placeholder="cake weight"/>
  </div>
  <div class="col-md-4">
  <label onChange={handleType}for="cars">Type</label>
  <select name="cars" id="cars">
  <option value="select">select...</option>
    <option value="chocloate">chocloate</option>
    <option value="vanilla">vanilla</option>
    <option value="strawberry">strawberry</option>
    <option value="red">red</option>
  </select>
  </div>
  <div class="col-md-2">
    <label for="inputflavour" class="form-label">Flavour</label>
    <input onChange={handleFlavour}type="text" class="form-control" id="inputflavour"placeholder="flavour"/>
  </div>
  <div class="col-6">
    <label for="inputdescription" class="form-label">Ingredients</label>
    <input onChange={handleIngredients}type="text" class="form-control" id="inputingredients" placeholder="cake ingredients"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input onChange={handleEggless}class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Eggless
      </label>
    </div>
  </div>
  <div class="col-12"><br/>
    <Link to="Allcakes"><button onClick={handleAddcake} type="submit" class="btn btn-primary">Add Cake</button></Link>
  </div>
</form>
        </div>
    )
}
export default Addcake