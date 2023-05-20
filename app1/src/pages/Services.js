import { useParams } from "react-router-dom";
import SwiperServices from "./SwiperServices"
const Services = ({categorie}) => {
    const {cat}=useParams()
    return ( 
        <>
        <SwiperServices categorieService={cat?cat:categorie} />
        </>
     );
}
 
export default Services;