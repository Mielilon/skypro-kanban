import styled from "styled-components";

const CategorySelectorContainer = styled.div`
  margin-bottom: 20px;
`;

const CategoriesTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CategoryTheme = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  cursor: pointer;
  background-color: ${({ $style }) => $style.backgroundColor};
  color: ${({ $style }) => $style.color};
  opacity: ${({ checked }) => (checked ? "1" : "0.4")};

  input {
    display: none;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export {
  CategorySelectorContainer,
  CategoriesTitle,
  CategoriesThemes,
  CategoryTheme,
};
