import styled from "styled-components";
import { Link } from "gatsby";
import { devices } from "./responsiveSizes";
import { edgeSpace, primaryAccentColor } from "./theme";

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

export const Section = styled.section`
  margin-top: ${edgeSpace + "em"};
  padding-left: ${edgeSpace*2 + "em"};
  padding-right: ${edgeSpace*2 + "em"};
`;

export const GridHolder = styled.div`
    display: flex;
    justify-content: center;
`;

export const LandingStyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    transition: all 0.5s;
    :hover {
            color: ${primaryAccentColor};
        }
    `;

export const StyledLink = styled(LandingStyledLink)`
display: block;
padding-bottom: 10px;
color: ${primaryAccentColor};
:hover {
    color: white;
}

`;

export const StyledA = styled.a`
color: ${primaryAccentColor};
text-decoration: none;
transition: all 0.5s;
:hover {
    color: white;
}
`;
