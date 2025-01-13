import Page68 from "../assets/pages/68/0.jpg";
import Page69 from "../assets/pages/69/0.jpg";
import Page70 from "../assets/pages/70/0.jpg";
import Page71 from "../assets/pages/71/0.jpg";


function MobileApplication() {
  return (
    <div className="bg-white p-4">
           <img src={Page68} loading="lazy" alt="Evaluation" />
           <img src={Page69} loading="lazy" alt="Evaluation" className="mt-5" />
           <img src={Page70} loading="lazy" alt="Evaluation" className="mt-5" />
           <img src={Page71} loading="lazy" alt="Evaluation" className="mt-5" />
       </div>
  )
}

export default MobileApplication