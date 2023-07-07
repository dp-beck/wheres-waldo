import { useState, useEffect } from 'react';

// Timer Function:
    // 2. Stop Timer Once the following conditions are met:
    //      A. Waldo is marked as found
    //      B. Odlaw is marked as found
    //      C. Wizard is marked as found


function Timer (props) {

    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;
        if (!props.allFound) {
            interval = setInterval(() => {
                setTime((time) => time + 1000);
            }, 1000);
        } else {
            clearInterval(interval);
        };
        return () => {
            clearInterval(interval);
        };
    }, [props.allFound]);
    
    return (
        <div> 
          {time/1000} seconds
          
        </div>
    )
}

export default Timer;