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
            </div>
        );
    }
}

export default WhatIsTelemed;