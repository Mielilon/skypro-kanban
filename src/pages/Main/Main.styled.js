import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

const Loading = styled.div`
  font-size: 18px;
`;
const Error = styled.div`
  font-size: 18px;
  color: #f84d4d;
`;

export { Wrapper, Loading, Error };
