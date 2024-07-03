import { useState} from 'react';
const Image =({url, width , height}) =>{
    return<img src={url} alt='logo' width={width} height={height}/>;
};
const Logo = () =>{
    return(
        <div>
            <Image url="jetbrains://web-storm/navigate/reference?project=Final-Project&path=vite-project/src/Header/2logo/format850.png"
                width={50}
                   height={50}
            />

        </div>
    )
}


export default Logo;