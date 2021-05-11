import { Box } from "grommet";
import styled from "styled-components/macro";

const HeaderTitle = styled.h1`
  display: block;
  width: 100%;
  flex-flow: column;
  text-align: center;
  line-height: 36px;
  color: white;
  font-size: 56px;
  line-height: 56px;
`;

const Header = () => {
  return (
    <Box
      direction="row"
      border={{ color: "black", size: "large" }}
      pad="xlarge"
      align="center"
      alignContent="center"
      alignSelf="center"
      background="black"
    >
      <HeaderTitle>Ticket Finder</HeaderTitle>
    </Box>
  );
}

export default Header;
