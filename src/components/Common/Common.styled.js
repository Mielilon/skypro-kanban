import { css } from "styled-components";

const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

const hover02 = css`
  &:hover {
    color: #33399b;
  }
`;

const headerUserArrow = css`
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;

export { hover01, hover02, headerUserArrow };
