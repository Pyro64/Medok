import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import React from 'react';
import style from './MyMap.module.scss'
const MyMap = (props) => {
    const mapData = {
        center: [51.536342356116286, 46.02227590785803],
        zoom: 15,
    };
    return (
        <div className={style.container}>
            <YMaps>
                <Map className={style.map} defaultState={mapData}>
                    {props.coordinates.map(coordinate => <Placemark key={coordinate} geometry={coordinate} />)}
                </Map>
            </YMaps>
        </div>
    );
}

export default MyMap;
