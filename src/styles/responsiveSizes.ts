const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '768px',
    mobileLMin: '500px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  };

  export const devices = {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    mobileLMin: `(min-width: ${sizes.mobileLMin})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptopMin: `(min-width: ${sizes.laptop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
  };

 export  const mobileLBreakpoint = 500 