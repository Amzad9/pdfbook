import Page56 from "../assets/pages/56/0.jpg";
import Page57 from "../assets/pages/57/0.jpg";
import Page58 from "../assets/pages/58/0.jpg";
import Page59 from "../assets/pages/59/0.jpg";

function Rainfed() {
  return (
    <div className="bg-white p-4">
        <img src={Page56} loading="lazy" alt="Evaluation" />
        <img src={Page57} loading="lazy" alt="Evaluation" className="mt-5" />
        <img src={Page58} loading="lazy" alt="Evaluation" className="mt-5" />
        <img src={Page59} loading="lazy" alt="Evaluation" className="mt-5" />
    </div>
  )
}

export default Rainfed