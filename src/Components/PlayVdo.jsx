



import { Link, Navigate } from "react-router-dom";
import { useGlobelContext } from "./Context/ProductContext";


function PlayVdo() {

    const{var1,setVar1,videos,setVideos}=useGlobelContext();
const handelerMovies=()=>{
  
}

  return (
    <>
    
      <div className="">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className=" d-flex justify-content-center">
      <Link className="btn btn-outline-primary" to={"/movies"}>Movies</Link>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {videos.map((t, index) => (
          <Link
            className="card shadow m-2 "
            style={{ width: "18rem" }}
            key={index}
            onClick={()=>{setVar1(t._id)}}
            to={"/em"}

          >
            <img src={t.poster_path} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{t.title}</h5>
              <p
                className="card-text "
                style={{
                  maxHeight: "100px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {t.strCategoryDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default PlayVdo;
