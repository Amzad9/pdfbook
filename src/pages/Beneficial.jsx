import Page36 from "../assets/pages/36/0.jpg";
import Page37 from "../assets/pages/37/0.jpg";
import Page38 from "../assets/pages/38/0.jpg";
import Page39 from "../assets/pages/39/0.jpg";

function Beneficial() {
  return (
      <div className="bg-white p-4">
            <img src={Page36} loading="lazy" style={{ width: "100%", height: "auto" }} alt="Evaluation" />
            <img src={Page37} loading="lazy" style={{ width: "100%", height: "auto" }} alt="Evaluation" className="mt-5" />
            <img src={Page38} loading="lazy" style={{ width: "100%", height: "auto" }} alt="Evaluation" className="mt-5" />
            <img src={Page39} loading="lazy" style={{ width: "100%", height: "auto" }} alt="Evaluation" className="mt-5" />
        </div>
  )
}

export default Beneficial