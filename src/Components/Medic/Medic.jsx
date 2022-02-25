import React from 'react';
import Title from '../Title/Title';
import DowloandApp from "../DowloandApp/DowloandApp";
import DowloandBanner from '../../images/DowloandApp/medic-banner.png'
import Banner from '../Banner/Banner';
import imgBanner from '../../images/Banner/home.jpg'
import WhatisTelemedContainer from '../WhatIsTelemed/WhatIsTelemedContainer';
const Medic = (props) => {
    return (
        <div>
            <Banner img={imgBanner} title="Приглашаем врачей к сотрудничеству" description="Откройте для себя новые возможности!"
                text="Телемедицина – это простой и надежный инструмент для Вашего профессионального и материального роста. Будьте на связи с постоянными клиентами. 
            Следите за их состоянием дистанционно и корректируйте назначенное лечение. Привлекайте новых пациентов, откликаясь на общие заявки. Что важно – делайте это официально и 
            за деньги. Как? Читаем дальше!" />
            <WhatisTelemedContainer page="medic" />
            <DowloandApp
                img={DowloandBanner}
                text="текст мотивации для врачей"
                title="Приложение для врачей" />
        </div>
    );
}

export default Medic;
