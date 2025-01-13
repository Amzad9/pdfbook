import Page20 from "../assets/pages/20/0.jpg";
import Page21 from "../assets/pages/20/0.jpg";
import Page22 from "../assets/pages/20/0.jpg";
import Page23 from "../assets/pages/20/0.jpg";

function BananaResidue() {
  return (
    <div className="bg-white p-4">
           <img src={Page20} loading="lazy" style={{ width: "100%", height: "auto" }} alt="Evaluation" />
           <img src={Page21} loading="lazy" style={{ width: "100%", height: "auto" }} alt="Evaluation" className="mt-5" />
           <img src={Page22} loading="lazy" style={{ width: "100%", height: "auto" }} alt="Evaluation" className="mt-5" />
           <img src={Page23} loading="lazy" style={{ width: "100%", height: "auto" }} alt="Evaluation" className="mt-5" />
       </div>
  )
}

export default BananaResidue