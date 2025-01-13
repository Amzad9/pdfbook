import Page64 from "../assets/pages/64/0.jpg";
import Page65 from "../assets/pages/65/0.jpg";
import Page66 from "../assets/pages/66/0.jpg";
import Page67 from "../assets/pages/67/0.jpg";

function Tankaa() {
  return (
    <div className="bg-white p-4">
        <img src={Page64} loading="lazy" alt="Evaluation" />
        <img src={Page65} loading="lazy" alt="Evaluation" className="mt-5" />
        <img src={Page66} loading="lazy" alt="Evaluation" className="mt-5" />
        <img src={Page67} loading="lazy" alt="Evaluation" className="mt-5" />
    </div>
  )
}

export default Tankaa