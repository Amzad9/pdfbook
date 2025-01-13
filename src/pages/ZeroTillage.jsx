import Page32 from "../assets/pages/32/0.jpg";
import Page33 from "../assets/pages/33/0.jpg";
import Page34 from "../assets/pages/34/0.jpg";
import Page35 from "../assets/pages/35/0.jpg";

function ZeroTillage() {
  return (
     <div className="bg-white p-4">
        <img src={Page32} alt="Evaluation" />
        <img src={Page33} alt="Evaluation" className="mt-5" />
        <img src={Page34} alt="Evaluation" className="mt-5" />
        <img src={Page35} alt="Evaluation" className="mt-5" />
    </div>
  )
}

export default ZeroTillage