import { getTopicStyle } from "../../lib/topic";
import * as S from "./Topic.styled";
import useTheme from "../../hooks/useTheme";

export default function Topic({ topic, size }) {
  const style = getTopicStyle(topic);
  const { theme } = useTheme();

  return (
    <S.CardTopic $size={size} $topicStyle={style} $theme={theme}>
      <S.TopicText>{topic}</S.TopicText>
    </S.CardTopic>
  );
}
