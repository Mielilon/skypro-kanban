import styled from "styled-components";

export const StyledCalendar = styled.div`
  margin-bottom: 20px;
  color: #94a6be;
`;

export const CalendarTtl = styled.div`
  margin-bottom: 20px;
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;
export const CalendarP = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 1;

  & span {
    color: ${(props) => props.theme.text};
  }
`;
