import styled from "styled-components";
import { Link } from "gatsby";
import { devices } from "./responsiveSizes";

// export const VerticalFlexDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* text-align: right; */
// `;

export const SectionSeperator = styled.div`
    height: 7em;
    @media ${devices.mobileL} {
            height: 1em;
        }
    
  
`;

export const GridHolder = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledLink = styled(Link)`
  color: lightblue;
  padding-bottom: 1em ;
  display: block;

`;