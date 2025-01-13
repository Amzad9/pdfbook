import Page52 from "../assets/pages/52/0.jpg";
import Page53 from "../assets/pages/53/0.jpg";
import Page54 from "../assets/pages/54/0.jpg";
import Page55 from "../assets/pages/55/0.jpg";

function Orchard() {
  return (
     <div className="bg-white p-4">
        <img src={Page52} alt="Evaluation" />
        <img src={Page53} alt="Evaluation" className="mt-5" />
        <img src={Page54} alt="Evaluation" className="mt-5" />
        <img src={Page55} alt="Evaluation" className="mt-5" />
    </div>
  )
}

export default Orchard