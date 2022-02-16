import style from './DowloandApp.module.scss';
import mobile from '../../images/DowloandApp/mobile.png';
import windows from '../../images/DowloandApp/windows.png';
import apple from '../../images/DowloandApp/apple.png';
function DowloandApp() {
    return (
        <div className={style.background}>
            <div className={style.container}>
                <div className={style.block}>
                    <div className={style.item}>
                        <h2>Скачайте приложение «МедОК Онлайн», и команда профессионалов всегда сможет позаботиться о
                            Вашем здоровье.</h2>
                        <div className={style.wrapper}>
                            <a href="#">
                                <img src={windows} alt="windows" />
                            </a>
                            <a href="#">
                                <img src={apple} alt="apple" />
                            </a>
                        </div>
                    </div>
                    <img src={mobile} className={style.mobile} alt="mobile" />
                </div>
            </div>
        </div>
    );
}

export default DowloandApp;