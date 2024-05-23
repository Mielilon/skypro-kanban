import { getTopicStyle } from "../../lib/topic";
import * as S from "./Topic.styled";

export default function Topic({ topic, size }) {
  const style = getTopicStyle(topic);

  return (
    <S.CardTopic $size={size} $topicStyle={style}>
      <S.TopicText>{topic}</S.TopicText>
    </S.CardTopic>
  );
}
