import Banner from "../Banner/Banner";

import DowloandApp from "../DowloandApp/DowloandApp";
import Form from "../Form/Form";
import DoctorContainer from "../Doctor/DoctorContainer";
import imgBanner from '../../images/Banner/home.jpg'
import DowloandBanner from '../../images/DowloandApp/home-banner.jpg'
import WhatisTelemedContainer from "../WhatIsTelemed/WhatIsTelemedContainer";
function Home(props) {
    return (
        <div>
            <Banner img={imgBanner} title="Медицина становится проще…" description="Все те же врачи, новый уровень сервиса" />
            < WhatisTelemedContainer page="home" />
            <DowloandApp
                img={DowloandBanner}
                text="Мы понимаем, что многим тяжело перебороть себя и обратиться к врачу, не отпросившись с работы, не отстояв очередь (даже когда Вам по записи), 
                и не заплатив 1000р за первичную консультацию. Поэтому мы решили Вас простимулировать. Привыкайте к хорошему!"
                title="Приложение для пользователей" />
            {<DoctorContainer />}
            <Form />
        </div>
    )
        ;
}

export default Home;