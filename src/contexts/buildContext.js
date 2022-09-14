import React, { useEffect, useState } from 'react';
import { getBuildingInfo } from '../data/apis';

const [bldInfo, setBldInfo] = useState(null);

useEffect(() => {
    if(accessToken){
        const res = getBuildingInfo(accessToken);
        setBldInfo(res);
    }
}, [])
console.log(bldInfo);