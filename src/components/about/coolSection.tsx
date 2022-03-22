// import { clipGradual } from 'components/landing/animations';
// import React from 'react';
// import styled from 'styled-components';
// import * from "../../assets"
// import { StaticImage } from 'gatsby-plugin-image';

// const Wrapper = styled.div`
//   margin-top: 10vh;
//   margin-bottom: 10vh;
//   overflow: hidden;

//   height: 80vh;
// `;

// const ImageBlocks = styled.div`
//   width: 90vh;
//   max-width: 95%;
//   height: 90vh;
//   margin: auto;
//   display: flex;
//   flex-direction: row;

//   img {
//     width: 100%;
//     height: 100%;
//     margin: auto;
//     object-fit: cover;}
//     /* clip-path: polygon(
//       0 0,
//      0 50%,
//       20% 50%,
//       20% 50%,
//       0 50%,
//       0 0,
//        32% 0,
//       32% 50%,
//       21% 50%,
//       21% 50%,
//       32% 50%,
//       32% 0,
//       33% 0,
//       33% 50%,
//       53% 50%,
//       53% 50%,
//       33% 50%,
//       33% 5%,
//       33% 0,
//       54% 0,
//        54% 50%,
//       71% 50%,
//       71% 50%,
//       54% 50%,
//       54% 0,
//       100% 0,
//       100% 50%,
//       72% 50%,
//       72% 50%,
//       100% 50%,
//       100% 0
//     );*/
//     /* transition: clip-path 1.25s;   }*/

//   /* img {
//     animation: ${clipGradual} 1.25s 1 forwards;
//     animation-delay: 1s;
//   } */
// `;

// interface CoolSectionProps {
//   // : string;
// }

// const city = '../../assets/city.jpg';
// const cityFull = "/Users/julietnwagwuume-ezeoke/Desktop/sabf_2022/src/assets/city.jpg"
// const CoolSection: React.FC<CoolSectionProps> = ({}) => {
//   return (
//     <Wrapper>
//       {/* <h1>Attend the conference</h1>
//         <h1>Get your tickets now</h1> */}
//       <ImageBlocks id="image" className="image--blocks">
//         <img src={cityFull} />
//       </ImageBlocks>
//     </Wrapper>
//   );
// };

// export default CoolSection;
