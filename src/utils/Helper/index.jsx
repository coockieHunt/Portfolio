
export function convertTextToUpperCase(DefaultText){
    return  DefaultText.toUpperCase();
};


export function ImportStyle(Type, Name){

    if(Type || Name === undefined ){ return }
    
    let dir;
    switch(Type){
        case 'component':
            dir = 'style/compenent/';
            break
        case 'pages':
            dir =  'style/page/';
            break
        default:
            return null
    }

    return dir + Name
};

export function FileExist(path){

    console.log(window.location.origin)

    // fs.access(path, fs.F_OK, (err) => {
    // if (err) {
    //     console.error(err)
    //     return
    // }

    // })
}