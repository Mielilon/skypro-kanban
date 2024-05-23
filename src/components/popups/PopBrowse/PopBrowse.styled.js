import styled from "styled-components";

const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 730px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 280px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

const PopBrowseError = styled.p`
  color: red;
`;

const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    &:hover {
      background-color: #33399b;
    }
  }
`;

const BtnGroup = styled.div`
  display: flex;
  button {
    margin-right: 8px;
  }
`;

const BtnEdit = styled.button`
  border-radius: 4px;
  border: 0.7px solid #565eef;
  background: transparent;
  color: #565eef;
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

const BtnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  color: #ffffff;
  &:hover {
    background-color: #33399b;
  }
`;

const BtnClose = styled(BtnBg)`
  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

const BtnDelete = styled(BtnEdit)`
  a {
    color: #565eef;
    text-decoration: none;
  }
`;

const CategoryTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1;
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

const ThemeDownCategories = styled.div`
  display: block;
  margin-bottom: 20px;
`;

const CategoriesP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const StatusLabel = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const StatusThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 14px 0 18px;
`;

const StatusTheme = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  cursor: pointer;
  background-color: ${({ $isChecked }) => ($isChecked ? "#94A6BE" : "#fff")};
  border: 0.7px solid
    ${({ $isChecked }) => ($isChecked ? "#94A6BE" : "#94A6BE")};
  color: ${({ $isChecked }) => ($isChecked ? "#fff" : "#94A6BE")};

  input {
    display: none;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export {
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTitle,
  PopBrowseWrap,
  PopBrowseForm,
  FormBrowseBlock,
  TextArea,
  PopBrowseError,
  PopBrowseBtnBrowse,
  BtnGroup,
  BtnEdit,
  BtnBg,
  BtnClose,
  BtnDelete,
  CategoryTheme,
  ThemeDownCategories,
  CategoriesP,
  StatusLabel,
  StatusThemes,
  StatusTheme,
};
