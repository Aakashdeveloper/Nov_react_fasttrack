import React,{useState} from 'react';

function HookComp(){
    const [title] = useState("HooksComponent")
    return(
        <div>
            Hooks Component
            <p>{title}</p>
        </div>
    )
}

export default HookComp;