import Page48 from "../assets/pages/48/0.jpg";
import Page49 from "../assets/pages/49/0.jpg";
import Page50 from "../assets/pages/50/0.jpg";
import Page51 from "../assets/pages/51/0.jpg";

function Vegetables() {
  return (
     <div className="bg-white p-4">
        <img src={Page48} alt="Evaluation" />
        <img src={Page49} alt="Evaluation" className="mt-5" />
        <img src={Page50} alt="Evaluation" className="mt-5" />
        <img src={Page51} alt="Evaluation" className="mt-5" />
    </div>
  )
}

export default Vegetables