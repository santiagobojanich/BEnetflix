import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCategories, GetContent} from "../actions";
import { Card } from "./Card";
import { LogOut } from "./logOut";
import Paginado from "./Paginado";
import { SearchBar } from "./SearchBar";
import home from '../styles/Home.module.css'



export const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const content = useSelector(state => state.content)
  const token = useSelector (state=> state.token)
  const rol = useSelector (state=> state.rol)

const petitionToken = {
  token: token
}

//-----------------------------------PAGINADO----------------------------------------------------//
    const [ActualPage, SetActualPage] = useState(1)
    const [ContentPP, SetContentPP] = useState(6)
    const LastContent = Math.ceil(ActualPage * ContentPP)
    const FirstContent = LastContent - ContentPP
    const ActualContent = content.slice(FirstContent, LastContent)
    const indicador = (number) => {
        SetActualPage(number)
    }




useEffect(() => {
  dispatch(GetContent(petitionToken)).then(() => dispatch (getCategories))
}, [dispatch])


  return (
    <div >  
     {!user? <div> Sign In to view the content </div> : null }
      
      {user ? 
       <div>  
         <div className={home.logOut_box}>
          <LogOut />
         </div>
         <div className={home.createButton}>
          {rol === 'Admin' ? <NavLink to='/createContent'> <button> Create Content </button> </NavLink> :null}
        </div>
         
          <div className={home.search_box}> 
          <SearchBar />
          </div>
           
         
          <div className={home.paginado_box}>
          <Paginado ContentPP={ContentPP} content={content.length} indicador={indicador} ActualPage={ActualPage}/>
          </div>
           
         <div className={home.cards}>
         {
         ActualContent.length === 0 ? <p> No Results for this Search </p> :
      
         ActualContent && ActualContent.map(cont => {
          return (
            <Card key={cont.name} name={cont.name} image={cont.image} id={cont.id}/>
          ) 
         })}
         </div>
        </div>
       : null}
    </div>
  );
};
