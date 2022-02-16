import Banner from "./Banner/Banner";
import WhatIsTelemed from "../WhatIsTelemed/WhatIsTelemed";
import DowloandApp from "../DowloandApp/DowloandApp";
import Doctor from "../Doctor/Doctor";
import Form from "../Form/Form";
import Subscribe from "../Subscribe/Subscribe";


function Home(props) {
    return (
        <div>
            <Banner />
            <WhatIsTelemed />
            <DowloandApp />
            <Doctor doctorData={props.doctorData} />
            <Form />
            <Subscribe />
        </div>
    )
        ;
}

export default Home;