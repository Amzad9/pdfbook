import Page76 from "../assets/pages/76/0.jpg";
import Page77 from "../assets/pages/77/0.jpg";

function Kund() {
  return (
    <div className="bg-white p-4">
        <img src={Page76} loading="lazy" alt="Evaluation" />
        <img src={Page77} loading="lazy" alt="Evaluation" className="mt-5" />
    </div>
  )
}

export default Kund