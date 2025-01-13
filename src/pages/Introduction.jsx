import Page12 from "../assets/pages/12/0.jpg";
import Page13 from "../assets/pages/13/0.jpg";

function Introduction() {
    return (
       <div className="bg-white p-4">
          <img src={Page12} alt="aboutus" />
          <img src={Page13} alt="aboutus" className="mt-5" />
        </div>
    )
}

export default Introduction