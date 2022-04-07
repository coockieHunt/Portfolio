import { ENVI } from "../../config";

export function ImportStyle(Type, Name){

    if(Type === undefined || Name === undefined) { return ['error', 'parameter not valid'] }

    let dir;
    switch(Type){
        case 'component':
            dir = 'style/components/';
            break
        case 'pages':
            dir =  'style/page/';
            break
        default:
            return ['error', 'type not found']
    }

    return ENVI.DIR + dir + Name
};


