import styled from "styled-components";

const StyledCalendar = styled.div`
  margin-bottom: 20px;
  color: #94a6be;
`;

const CalendarTtl = styled.div`
  margin-bottom: 20px;
`;

const CalendarPeriod = styled.div`
  padding: 0 7px;
`;
const CalendarP = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 1;

  & span {
    color: ${(props) => props.theme.text};
  }
`;
const CalendarWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > p {
    margin-left: 4px;
  }
`;

const CalendarLabel = styled.p`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export {
  StyledCalendar,
  CalendarTtl,
  CalendarPeriod,
  CalendarP,
  CalendarWrap,
  CalendarLabel,
};
