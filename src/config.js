import { 
    MdOutlineDangerous, 
    MdInfoOutline, 
    MdOutlineWarningAmber, 
    MdOutlineVerifiedUser 
} from 'react-icons/md';

import colors from './utils/style/library/color';

export const ENVI = {
    DIR : " /opt/portfolio/src/"
}

export const SOCIAL_LINK = {
    "DeviantArt" :  'https://www.deviantart.com/coockiehunt',
    "GitHub" :  'https://github.com/coockieHunt',
}

export const ALERT = {
    "ok" : {
        'icon' : <MdOutlineVerifiedUser className='react-icons-middel' />,
        'backgroundColor' : 'rgb(12, 19, 13)',
        'IconColor' : 'rgb(102, 187, 106)',
        'TextColor' : 'rgb(204, 232, 205)'
    },
    "danger" : {
        'icon' : <MdOutlineDangerous className='react-icons-middel' fill= 'green' stroke= 'green' />,
        'backgroundColor' : 'rgb(22, 11, 11)',
        'IconColor' : 'rgb(244, 67, 54)',
        'TextColor' : 'rgb(244, 199, 199)'
    },
    "info" : {
        'icon' : <MdInfoOutline className='react-icons-middel' fill= 'green' stroke= 'green' />,
        'backgroundColor' : 'rgb(7, 19, 24)',
        'IconColor' : 'rgb(41, 182, 246)',
        'TextColor' : 'rgb(184, 231, 251)'
    },
    "warning" : {
        'icon' : <MdOutlineWarningAmber className='react-icons-middel' fill= 'green' stroke= 'green' />,
        'backgroundColor' : 'rgb(25, 18, 7)',
        'IconColor' : 'rgb(255, 167, 38)',
        'TextColor' : 'rgb(255, 226, 183)'
    }
}

export const BUTTON={
    "type" : [
        'button',
        'submit'
    ],
    "defultTheme" : "primary",
    "theme" : {
        "primary" : {
            "backgroundColor" : colors.primary,
            "gradiant": "",
            "HoverColor": colors.secondary,
            "borderRadius": "3px"
        },

        "secondary" : {
            "backgroundColor" : colors.secondary,
            "gradiant": "",
            "HoverColor": colors.primary,
            "borderRadius": "3px"
        },

        "warning" : {
            "backgroundColor" : '#ffcc00',
            "gradiant": "",
            "HoverColor": '#E5B700',
            "borderRadius": "3px"
        },
        
        "ok" : {
            "backgroundColor" : '#25b33a',
            "gradiant": "",
            "HoverColor": '#3eb54f',
            "borderRadius": "3px"
        },
    }
}