import style from './WhatIsTelemed.module.scss';
import svgOne from '../../../src/images/Telemed/svg-1.png';
import svgTwo from '../../../src/images/Telemed/svg-2.png';
import svgThree from '../../../src/images/Telemed/svg-3.png';

function WhatIsTelemed() {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <h2 className='title'>Что такое телемедицина?</h2>
                <p className={style.textCenter}>Используйте наше мобильное приложение,
                    находясь дома, на работе, в дороге – получите срочную консультацию врача или сэкономьте средства на
                    стоимости приема</p>
            </div>
            <div className={style.block}>
                <div className={style.item}>
                    <img className={style.svg} src={svgOne} alt="svg" />
                    <h4>Укажите Вашу проблему</h4>
                    <p>Приложение поможет подобрать Вам врача в зависимости от проблемы,
                        с которой Вы обратились, а диспетчерская служба системы пригласит к ответу самого актуального специалиста</p>
                </div>
                <div className={style.item}>
                    <img className={style.svg} src={svgTwo} alt="svg" />
                    <h4>Выберите любимого врача</h4>
                    <p>Найдите лучшего доктора, воспользовавшись рейтинговой системой и собственным опытом общения.
                        Добавьте его в «Мои врачи», чтобы всегда суметь оставить приоритетное обращение</p>
                </div>
                <div className={style.item}>
                    <img className={style.svg} src={svgThree} alt="svg" />
                    <h4>Получите консультацию</h4>
                    <p>Общайтесь с доктором в чате при помощи сообщений, аудио- или видеосвязи. Делитесь документами и будьте уверены в конфиденциальности –
                        врачебная тайна по-прежнему охраняется Законом и Этикой</p>
                </div>
            </div>
        </div>
    );
}

export default WhatIsTelemed;