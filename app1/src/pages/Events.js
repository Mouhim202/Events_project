import { useParams } from "react-router-dom";
import SwiperEvents from "./SwiperEvents"
const Events = ({categorie}) => {
    const {cat}=useParams()
    return ( 
        <>
        <SwiperEvents categorieEvent={cat?cat:categorie} />
        </>
     );
}
 
export default Events;