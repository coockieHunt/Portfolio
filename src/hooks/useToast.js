import { useState } from "react";

const useToast = () => {
  const [isShowingToast, setIsShowingToast] = useState(false);

  function toggleToast() {
    setIsShowingToast(!isShowingToast);

    setTimeout(function(){
            setIsShowingToast(false)
    console.log("Two");
    }, 2000);
  }

  return {
    isShowingToast,
    toggleToast
  };
};

export default useToast;