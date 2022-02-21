import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import React from 'react';
import style from './MyMap.module.scss'
const MyMap = (props) => {
    let state = props.customMap
    return (
        <div className={style.container}>
            <YMaps>
                <Map className={style.map} defaultState={state.medokMap}>
                    {state.medokMap.coordinates.map(coordinate => <Placemark key={coordinate} geometry={coordinate} />)}
                </Map>
            </YMaps>
        </div>
    );
}

export default MyMap;
