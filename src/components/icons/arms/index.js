import React from "react";

import BatteredAxe from "./BatteredAxe";
import Claymore from "./Claymore";
import EnglishLongBow from "./EnglishLongBow";
import Flail from "./Flail";



const Icon = props => {
    switch (props.name) {
        case "BatteredAxe":
            return <BatteredAxe {...props} />;
        case "Claymore":
            return <Claymore {...props} />;
        case "EnglishLongBow":
            return <EnglishLongBow {...props} />;
        case "Flail":
            return <Flail {...props} />;
        default:
            return <div />;
    }
};

export { Icon };