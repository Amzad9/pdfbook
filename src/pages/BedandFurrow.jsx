import Page72 from "../assets/pages/72/0.jpg";
import Page73 from "../assets/pages/73/0.jpg";
import Page74 from "../assets/pages/74/0.jpg";
import Page75 from "../assets/pages/75/0.jpg";



function BedandFurrow() {
  return (
      <div className="bg-white p-4">
               <img src={Page72} loading="lazy" style={{ width: "100%", height: "auto" }} alt="Evaluation" />
               <img src={Page73} loading="lazy" style={{ width: "100%", height: "auto" }} alt="Evaluation" className="mt-5" /> style={{ width: "100%", height: "auto" }}
               <img src={Page74} loading="lazy" style={{ width: "100%", height: "auto" }} alt="Evaluation" className="mt-5" /> style={{ width: "100%", height: "auto" }}
               <img src={Page75} loading="lazy" style={{ width: "100%", height: "auto" }} alt="Evaluation" className="mt-5" />
           </div>
  )
}

export default BedandFurrow