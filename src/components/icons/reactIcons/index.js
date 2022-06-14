import React from "react";

import BatteredAxe from "./BatteredAxe";
import Claymore from "./Claymore";
import EnglishLongBow from "./EnglishLongBow";
import Flail from "./Flail";
import BsPatchPlus from "./BsPatchPlus"
import BsPatchMinus from "./BsPatchMinus";
import ArrowBarLeft from "./ArrowBarLeft";
import ArrowBarRight from "./ArrowBarRight";
import HealthPotion from "./HealthPotion";
import AttackSkillIcon from "./AttackSkillIcon";
import DeffenseSkillIcon from "./DeffenseSkillIcon";
import Envelope from "./Envelope";
import AddressBook from "./AddressBook";
import Phone from "./Phone";
import Inbox from "./Inbox";
import menuMinus from "./menuMinus";
import HamburgerMenu from "./HamburgerMenu";


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
        case "BsPatchPlus":
            return <BsPatchPlus {...props} />;
        case "BsPatchMinus":
            return <BsPatchMinus {...props} />
        case "ArrowBarLeft":
            return <ArrowBarLeft {...props} />
        case "ArrowBarRight":
            return <ArrowBarRight {...props} />
        case "HealthPotion":
            return <HealthPotion {...props} />
        case "AttackSkillIcon":
            return <AttackSkillIcon {...props} />
        case "DefenseSkillIcon":
            return <DeffenseSkillIcon {...props} />
        case "Envelope":
            return <Envelope {...props} />
        case "AddressBook":
            return <AddressBook {...props} />
        case "Phone":
            return <Phone {...props} />
        case "Inbox":
            return <Inbox {...props} />
        case "menuMinus":
            return <menuMinus {...props} />
        case "HamburgerMenu":
            return <HamburgerMenu {...props} />
        default:
            return <div />;
    }
};

export { Icon };