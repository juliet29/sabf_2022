import {faExclamationTriangle, faNotEqual, faUsers, faGraduationCap, faMountain, faBalanceScale, } from '@fortawesome/free-solid-svg-icons'

import { IconProp } from "@fortawesome/fontawesome-svg-core"

type Criteria = Array<{
    name: string,
    detail: string,
    icon: IconProp
}>


export const criteria:Criteria = [
    {
        name: "Value proposition",
        detail: "Is this solving a critical problem?",
        icon: faExclamationTriangle,
     },
     {
        name: "Market",
        detail: "How large is the total addressable population or market? ",
        icon: faUsers, 
     },
     {
        name: "Defensibility",
        detail: "How are you differentiated against competitors?",
        icon: faNotEqual,
     },
     {
        name: "Team",
        detail: "Why is this team the one to solve this problem?",
        icon: faGraduationCap, 
     },
     {
        name: "Traction",
        detail: "What have you achieved so far? Is this business model viable, based on results?",
        icon: faMountain,
     },
     {
        name: "Scale",
        detail: "Does this product have the potential to change lives for millions?",
        icon: faBalanceScale, 
     },
]
