import style from './DowloandApp.module.scss';

function DowloandApp(props) {
    return (
        <div className={style.block}>
            <img src={props.img} alt="background" />
            <div className={style.container}>
                <div className={style.item}>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    <a href="#" className='btn'>Хочу приложение</a>
                </div>
            </div>
        </div>
    );
}

export default DowloandApp;