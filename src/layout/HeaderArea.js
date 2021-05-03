import styled from "styled-components";

const HeaderArea = styled.div`
  display: grid;
  grid-area: HeaderArea;

  height: 200px;
  text-align: center;
  vertical-align: middle;

  font-size: 70px;
  font-weight: 700;
  line-height: 200px;

  a:link {
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: black;
    text-decoration: underline;
  }

  a:active {
    color: blac;
    text-decoration: underline;
  }
`;

export default HeaderArea;
