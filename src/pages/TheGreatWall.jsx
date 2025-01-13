
import Page78 from "../assets/pages/78/0.jpg";
import Page79 from "../assets/pages/79/0.jpg";
import Page80 from "../assets/pages/80/0.jpg";
import Page81 from "../assets/pages/81/0.jpg";
import Page82 from "../assets/pages/82/0.jpg";

function TheGreatWall() {
  return (
    <div className="bg-white p-4">
        <img src={Page78} loading="lazy" alt="Evaluation" className="mt-5" />
        <img src={Page79} loading="lazy" alt="Evaluation" className="mt-5" />
        <img src={Page80} loading="lazy" alt="Evaluation" className="mt-5" />
        <img src={Page81} loading="lazy" alt="Evaluation" className="mt-5" />
        <img src={Page82} loading="lazy" alt="Evaluation" className="mt-5" />
    </div>
  )
}

export default TheGreatWall