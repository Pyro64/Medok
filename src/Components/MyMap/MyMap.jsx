import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import React from 'react';
import style from './MyMap.module.scss'
const MyMap = (props) => {

    return (
        <div className={style.container}>
            <YMaps>
                <Map className={style.map} defaultState={props.medokMap}>
                    {props.medokMap.coordinates.map(coordinate => <Placemark key={coordinate} geometry={coordinate} />)}
                </Map>
            </YMaps>
        </div>
    );
}

export default MyMap;
