import Banner from "../Banner/Banner";
import WhatIsTelemed from "../WhatIsTelemed/WhatIsTelemed";
import DowloandApp from "../DowloandApp/DowloandApp";
import Form from "../Form/Form";
import imgBanner from '../../images/Banner-home.jpg';
import DoctorContainer from "../Doctor/DoctorContainer";

function Home(props) {
    return (
        <div>
            <Banner img={imgBanner} title="Медицина становится проще…" text="Все те же врачи, новый уровень сервиса" />
            <WhatIsTelemed />
            <DowloandApp />
            {<DoctorContainer />}
            <Form />
        </div>
    )
        ;
}

export default Home;