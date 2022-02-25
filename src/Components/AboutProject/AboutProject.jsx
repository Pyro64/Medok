import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe'
import imgBanner from '../../images/Banner/about.png'

function AboutProject() {
    return (
        <div>
            <Banner img={imgBanner} title="Продукты, меняющие систему здравоохранения" description="Все те же врачи, новый уровень сервиса" />
        </div>);
}

export default AboutProject;