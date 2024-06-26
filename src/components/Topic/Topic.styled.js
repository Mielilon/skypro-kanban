import styled from "styled-components";

const TopicText = styled.p`
  font-weight: 600;
`;

const CardTopic = styled.div`
  width: auto;
  height: ${({ $size }) => ($size === "big" ? "30px" : "20px")};
  padding: ${({ $size }) => ($size === "big" ? "8px 20px" : "5px 14px")};
  border-radius: 18px;
  background-color: ${({ $topicStyle, $theme }) =>
    $theme === "light" ? $topicStyle.backgroundColor : $topicStyle.color};

  ${TopicText} {
    color: ${({ $topicStyle, $theme }) =>
      $theme === "light" ? $topicStyle.color : $topicStyle.backgroundColor};
    font-size: ${({ $size }) => ($size === "big" ? "14px" : "10px")};
    line-height: ${({ $size }) => ($size === "big" ? "14px" : "10px")};
  }
`;

export { CardTopic, TopicText };
