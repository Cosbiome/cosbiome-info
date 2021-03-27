import { useHistory } from "react-router";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";

const Home = () => {
  const history = useHistory();

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={image1} alt="..." width="100%" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">INFROMACION SOBRE APRATOLOGIA</h5>
                </div>
              </div>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "5px",
                  paddingRight: "15px",
                }}
                className="col-md-2"
              >
                <button
                  onClick={() => history.push("/registro/MAQUINAS")}
                  className="btn"
                >
                  DESCUBRIR MAS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "5px",
                  paddingLeft: "15px",
                }}
                className="col-md-2"
              >
                <button
                  onClick={() => history.push("/registro/PRODUCTO")}
                  className="btn"
                >
                  DESCUBRIR MAS
                </button>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    INFROMACION SOBRE LINEA COSBIOME
                  </h5>
                </div>
              </div>
              <div className="col-md-4">
                <img src={image2} alt="..." width="100%" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={image3} alt="..." width="100%" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    INFROMACION SOBRE CARRERAS COSBIOME
                  </h5>
                </div>
              </div>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "5px",
                  paddingRight: "15px",
                }}
                className="col-md-2"
              >
                <button
                  onClick={() => history.push("/registro/COSMETOLOGIA")}
                  className="btn"
                >
                  DESCUBRIR MAS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "5px",
                  paddingLeft: "15px",
                }}
                className="col-md-2"
              >
                <button
                  onClick={() => history.push("/registro/CURSO")}
                  className="btn"
                >
                  DESCUBRIR MAS
                </button>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    INFROMACION SOBRE CURSOS COSBIOME
                  </h5>
                </div>
              </div>
              <div className="col-md-4">
                <img src={image4} alt="..." width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
