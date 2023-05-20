import Services from "./Services"

const Allservices = () => {
    return ( 
        <>
    <h1>All Services</h1>
    <hr/>

    <Services  categorie="traiteur"/>
    <hr/>
 
    <Services  categorie="photographe"/>
    <hr/>

    <Services  categorie="decoration"/>
    
    </>
     );
}
 
export default Allservices;