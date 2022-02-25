import style from './WhatIsTelemed.module.scss';
import WhatIsTelemedItem from './WhatIsTelemedItem';
function WhatIsTelemed(props) {
    let homeElements = props.homeData.map(e =>
        <WhatIsTelemedItem
            id={e.id}
            svg={e.svg}
            title={e.title}
            text={e.text}
            key={e.id}
        />
    )
    let medicElements = props.medicData.map(e =>
        <WhatIsTelemedItem
            id={e.id}
            svg={e.svg}
            title={e.title}
            text={e.text}
            key={e.id}
        />
    )
    let render = props.page
    if (render === 'home') {
        return (
            <div className={style.container}>
                <div className={style.wrapper}>
                    <h2 className='title'>Что такое телемедицина?</h2>
                    <p>Используйте наше мобильное приложение,
                        находясь дома, на работе, в дороге – получите срочную консультацию врача или сэкономьте средства на
                        стоимости приема</p>
                </div>
                <div className={style.block}>
                    {homeElements}
                </div>
            </div>
        );
    } else if (render === 'medic') {
        return (
            <div className={style.container}>
                <div className={style.wrapper}>
                    <h2 className='title'>Что такое телемедицина?</h2>
                    <p>Используйте наше мобильное приложение, находясь дома, на работе, в дороге – получите срочную консультацию врача или сэкономьте средства на стоимости приема</p>
                </div>
                <div className={style.block}>
                    {medicElements}
                </div>
                <div className={style.description}>
                    <div className={style.wrapper}>
                        <h2 className='title'>Что разрешено во время телемедицинских консультаций</h2>
                        <p>Согласно определению законодательства РФ, Телемедицинская консультация – это
                            обычная медицинская консультация, но осуществленная с применением телекоммуникационных технологий.</p>
                        <p>В связи с этим, Все требования к оказанию медицинской помощи справедливы и для телемедицинских консультаций.</p>
                    </div>
                    <ul>
                        <li>профилактика, сбор, анализ жалоб пациента и данных анамнеза</li>
                        <li>оценка эффективности лечебно-диагностических мероприятий</li>
                        <li>медицинское наблюдение за состоянием здоровья пациента</li>
                        <li>принятие решения о необходимости проведения очного приема (осмотра, консультации)</li>
                        <li>коррекция ранее назначенного лечения при условии установления врачом диагноза и назначения лечения на очном приеме (осмотре, консультации)</li>
                        <li>дистанционное наблюдение за состоянием здоровья пациента, назначенное лечащим врачом после очного приема (осмотра, консультации)</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default WhatIsTelemed;