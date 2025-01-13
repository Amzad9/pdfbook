import Page40 from "../assets/pages/40/0.jpg";
import Page41 from "../assets/pages/41/0.jpg";
import Page42 from "../assets/pages/42/0.jpg";
import Page43 from "../assets/pages/43/0.jpg";

function Intercropping() {
  return (
    <div className="bg-white p-4">
        <img src={Page40} loading="lazy" alt="Evaluation" />
        <img src={Page41} loading="lazy" alt="Evaluation" className="mt-5" />
        <img src={Page42} loading="lazy" alt="Evaluation" className="mt-5" />
        <img src={Page43} loading="lazy" alt="Evaluation" className="mt-5" />
    </div>
  )
}

export default Intercropping