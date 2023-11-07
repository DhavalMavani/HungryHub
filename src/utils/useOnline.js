import React, { useEffect, useState } from 'react'

function useOnline() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        const handleOnline=()=>{ setIsOnline(true) }
        const handleOffline=()=>{ setIsOnline(false) }
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        return ( ()=> {
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline",handleOffline)
            // console.log("Event listner removed");
          }
        )
    },[])

  return isOnline
}

export default useOnline