import { css } from "styled-components";

const hover01 = css`
  &:hover {
    background-color: ${({ theme }) => theme.hoverBgColor};
  }
`;

const hover02 = css`
  &:hover {
    color: ${({ theme }) => theme.hoverBgColor};
  }
`;

export { hover01, hover02 };
