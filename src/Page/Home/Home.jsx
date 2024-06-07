
// import NavBar from "../../layout/shared/NavBar";

// import Bprofile from "../../layout/shared/Bprofile";

import { Helmet } from "react-helmet-async";
// import NavBar from "../../layout/shared/NavBar";
import Banner from "../Home/Banner";
import History from "../../Page/History";
import BioData from "../../Page/BioData";


const Home = () => {
    return (
<div>
 <Helmet>
    <title>Bd Matrimonial | Home</title>
 </Helmet>
 <Banner></Banner>
            <History></History>
            <BioData></BioData>
    
</div>

    
    );
};

export default Home;