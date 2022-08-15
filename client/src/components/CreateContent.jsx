import { useState } from "react";
import { createContent } from '../actions/index'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import styles from '../styles/Create.module.css'

export const CreateContent = () => {
 
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const rol = useSelector(state => state.rol)
 
   const [input, setInput] = useState({
    name: "",
    image: "",
    trailer: "",
    categories: [],
    description: "",
  });

  const handleInput = (e) => {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleSelect = (e) => {
   e.preventDefault()
   if(input.categories.includes(e.target.value)) return
   setInput({
      ...input, 
      categories: [...input.categories, e.target.value]
   })
  }

  const accesstoken = {
   token : token
  }
  const handleSubmit = (e) => {
   e.preventDefault()
   dispatch(createContent(input, accesstoken)).then(()=>{
    Swal.fire('Content created')
   })
    //  }).then(() => {
  //   window.location.assign('http://localhost:3000/home')
  //  })
  }

  const handleDelete = (categorie) => {
     setInput({
      ...input,
      categories: input.categories.filter(cat => cat !== categorie)
     })
  }

 const categories = ['Action', 'Adventure', 'Terror', 'Drama', 'Comedy', 'Romantic'] 
 
 if(rol !== 'Admin'){
  return(
    <p style={{color: "red"}}> ONLY ADMIN CAN ACCESS HERE </p>
  )
 } 

  return (
    <div>
      <div className={styles.title}> 
      <p> CREATE CONTENT </p>
      </div>
      <div className={styles.back_container}>
      <NavLink to="/home"> <button className={styles.back}> BACK </button>  </NavLink>
       </div>

      <div className={styles.form_container}>
      <form className={styles.form_box} onSubmit={handleSubmit}>
        <div className={styles.form_labels}>
        <label> Name</label>
        <input type="text" name="name" value={input.name} onChange={handleInput} placeholder="Insert name..." />
        </div>
        <div className={styles.form_labels}>
        <label> Image </label>
        <input type="text" name="image" value={input.image} onChange={handleInput} placeholder="Insert image URL..." />
        </div>
        <div className={styles.form_labels}>
        <label> Trailer </label>
        <input type="text"name="trailer" value={input.trailer} onChange={handleInput} placeholder="Insert Youtube URL trailer..."
        />
        </div>
        <div className={styles.form_labels}>
        <label> Description </label>
        <input
          type="text" name="description" value={input.description} onChange={handleInput} placeholder="Insert description..."/>
          </div>
        <div>
       <label className={styles.form_labels}> Category </label>
       <select onChange={handleSelect}> 
         {categories && categories.map(cat =>{
           return (
             <option key={cat} value={cat} > {cat} </option>
             )
            })}
       </select>
       <div className={styles.categories}>
        <ul>
        {input.categories && input.categories.map(cat=> {
          return (
            <li key={cat}> 
             <span> {cat} </span> 
              <button onClick={() => handleDelete(cat)}> X </button> 
            </li>
          )
        })}
        </ul>
        </div>
        </div>   
        <div className={styles.buttonContainer}>
        <button className={styles.button} type="submit" disabled={(!input.name|| !input.image || !input.trailer || !input.categories || !input.description ? true : false)} > Create </button>
       </div>     
      </form>
       </div>
    </div>
  );
};
