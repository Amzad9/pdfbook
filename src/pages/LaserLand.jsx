import Page28 from "../assets/pages/28/0.jpg";
import Page29 from "../assets/pages/29/0.jpg";
import Page30 from "../assets/pages/30/0.jpg";
import Page31 from "../assets/pages/31/0.jpg";


function LaserLand() {
    return (
        <div className="bg-white p-4">
            <img src={Page28} alt="Evaluation" />
            <img src={Page29} alt="Evaluation" className="mt-5" />
            <img src={Page30} alt="Evaluation" className="mt-5" />
            <img src={Page31} alt="Evaluation" className="mt-5" />
        </div>
    )
}

export default LaserLand