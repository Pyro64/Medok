import style from './Doctor.module.scss';
import DoctorItem from './DoctorItem/DoctorItem';

function Doctor(props) {
    let state = props.doctorPage;
    let doctorElements = state.doctorData.map(doctor =>
        <DoctorItem
            id={doctor.id}
            img={doctor.img}
            name={doctor.name}
            prof={doctor.prof}
            text={doctor.text}
            timetable={doctor.timetable}
            key={doctor.id}
        />
    )
    return (
        <div className={style.container}>
            <h2 className='title'>Познакомьтесь с нашими специалистами</h2>
            <div className={style.subtitle}>Скачайте приложение «МедОК Онлайн», и они будут на связи, чтобы помочь Вам именно тогда, когда это важно</div>
            <div className={style.block}>
                {doctorElements}
            </div>
        </div>
    );
}

export default Doctor;