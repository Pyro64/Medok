import React from 'react';
import Title from '../Title/Title';
import WhatIsTelemed from '../WhatIsTelemed/WhatIsTelemed';

const Medic = (props) => {
    return (
        <div>
            <Title text="Приглашаем врачей к сотрудничеству" />
            <WhatIsTelemed />
        </div>
    );
}

export default Medic;
