'use client'

import { cibGithub, cibGoogle } from "@coreui/icons";
import CIcon from "@coreui/icons-react";



export default function Icon({provider}:{provider:String}) {
console.log(provider);

if(provider.toLowerCase() ==="google"){

    return <CIcon width={50} height={50} icon={cibGoogle} /> 
}    
if(provider.toLowerCase() ==="github"){

    return <CIcon width={50} height={50} icon={cibGithub} /> 
}
// return <></>

}