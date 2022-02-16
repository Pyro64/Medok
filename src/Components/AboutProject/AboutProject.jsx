import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe'
import imgBanner from '../../images/Banner-about.png';

function AboutProject() {
    return (
        <div>
            <Banner img={imgBanner} text="Продукты, меняющие систему здравоохранения" />
        </div>);
}

export default AboutProject;