import styled from "styled-components";

const RootContainer = styled.div`
  grid-template-columns: auto 190px 190px 190px 190px 190px 190px auto;
  display: grid;
  grid-template-areas:
    "HeaderArea HeaderArea HeaderArea HeaderArea HeaderArea HeaderArea HeaderArea HeaderArea"
    "SideBarLeft ContentArea ContentArea ContentArea ContentArea ContentArea ContentArea SideBarRight"
    "FooterArea FooterArea FooterArea FooterArea FooterArea FooterArea FooterArea FooterArea ";

  font-family: "Roboto", sans-serif;
  text-align: left;
  font-size: 14px;

  min-width: 1366px;
`;
export default RootContainer;
