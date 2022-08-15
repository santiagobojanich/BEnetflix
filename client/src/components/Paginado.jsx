import style from '../styles/Home.module.css'


export default function Paginado ({ContentPP,content,indicador,ActualPage}) {
   
   
   
    const pages = []
   for  (let i=1; i<=Math.ceil(content/ContentPP); i++) {
       pages.push(i)
   }
   
   return (
       <nav className={style.paginado}>
            <button onClick={() => indicador(1) }> {`<<`}</button>
           <button onClick={()=> indicador(ActualPage - 1)} disabled={ActualPage === 1 ?true: false} > {`<`} </button>
           {/* {pages && pages.map(page => (
                   <button key={page}onClick={() => indicador(page)}> {page} </button>
           ))} */}
           <span> {`${ActualPage}/ ${pages.length}`} </span>
           <button onClick={()=> indicador(ActualPage + 1)} disabled={ActualPage===pages.length?true: false} > {`>`} </button>
           <button onClick={()=> indicador(pages.length)}> {`>>`}  </button>
       </nav>
   )

}
 