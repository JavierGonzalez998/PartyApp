export const verifyResultCode = (result) => {
    const reg = /3|4/g;
  
    if (reg.test(result)) {
      return false;
    } else {
      return true;
    }
  };
