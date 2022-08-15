import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { GetContentDetail, deleteContent, makeComent } from "../actions";
import styles from "../styles/Detail.module.css";

export const ContentDetail = () => {
  const dispatch = useDispatch();
  const Detail = useSelector((state) => state.contentDetail);
  const id = useParams();
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const rol = useSelector((state) => state.rol);

  const petitionToken = {
    token: token,
  };

  useEffect(() => {
    dispatch(GetContentDetail(id, petitionToken));
  }, [dispatch, id]);

  const [coment,setComent] = useState("")
  
  const handleComent = (e) => {
      setComent(e.target.value)
  }

  const bodyComent = {
     contentId: id.id,
     coment: coment
  }


  const sendComent = (e) => {
     e.preventDefault()
     console.log(petitionToken)
     window.location.reload()
     dispatch(makeComent(bodyComent,petitionToken))
  }

  
  const handleDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Sure you want to DELETE this content?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteContent(id, petitionToken));
        window.location.assign("http://localhost:3000/home");
      }
    });
  };

  if (!user) {
    return <p> Must be loguedIn to access this content </p>;
  }

  return (
    <div>
      <div className={styles.title}>
        {" "}
        <h1> ENJOY IT </h1>{" "}
      </div>
      <div className={styles.back}>
        <NavLink to="/home">
          {" "}
          <button> BACK </button>{" "}
        </NavLink>
      </div>

      <div className={styles.container}>
        {Detail.map((detail) => {
          return (
            <div className={styles.box}>
              <span className={styles.subTitle}>{detail.name}</span>
              <p> {detail.description} </p>

              <div className={styles.categories}>
                <span> Cateogires: </span>
                <ul>
                  {detail.categories.map((cat) => {
                    return <li key={cat}>{cat}</li>;
                  })}
                </ul>
              </div>
              <div className={styles.video}>
                <iframe
                  width="660"
                  height="400"
                  src={`https://www.youtube.com/embed/${detail.trailer}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                ></iframe>
              </div>
              <div></div>

              {rol === "Admin" ? (
                <div>
                  <button onClick={handleDelete} className={styles.but}>
                    {" "}
                    DELETE{" "}
                  </button>
                  <NavLink to={`/updateContent/${id.id}`}>
                    {" "}
                    <button className={styles.but}> UPDATE </button>{" "}
                  </NavLink>
                </div>
              ) : null}

              <div className={styles.coment_box}>
                <label>MAKE COMENT </label>
                <input type="text" value={coment.value} onChange={handleComent}/>
                <button onClick={sendComent}> SEND </button>
                <ul>
                  <label>COMENTARIOS: </label>
                  {detail.coments.map((coment) => {
                    return <li key={coment}>{coment}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
