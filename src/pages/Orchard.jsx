import Page52 from "../assets/pages/52/0.jpg";
import Page53 from "../assets/pages/53/0.jpg";
import Page54 from "../assets/pages/54/0.jpg";
import Page55 from "../assets/pages/55/0.jpg";

function Orchard() {
  return (
     <div className="bg-white p-4">
        <img src={Page52} loading="lazy" alt="Evaluation" />
        <img src={Page53} loading="lazy" alt="Evaluation" className="mt-5" />
        <img src={Page54} loading="lazy" alt="Evaluation" className="mt-5" />
        <img src={Page55} loading="lazy" alt="Evaluation" className="mt-5" />
    </div>
  )
}

export default Orchard