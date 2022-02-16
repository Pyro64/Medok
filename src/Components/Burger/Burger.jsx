import style from './Burger.module.scss';

function Burger() {
    return (
        <div className={style.burger}>
            <div className={style.icon}></div>
        </div>
    );
}

export default Burger;