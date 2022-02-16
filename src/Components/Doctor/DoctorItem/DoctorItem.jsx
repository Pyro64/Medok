import style from "./DoctorItem.module.scss";
function DoctorItem(props) {
    return (
        <div className={style.container}>
            <div className={style.block}>
                <img src={props.img} alt="" className={style.img} />
                <h4>{props.name}</h4>
                <h5>{props.prof}</h5>
                <p> {props.text}</p>
            </div>
            <div className={style.item}>
                <div className={style.timetable}>{props.timetable}</div>
                <a href="#" className="btn">View Profile </a>
            </div>
        </div>
    );
}

export default DoctorItem;
