import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ru } from "date-fns/locale";
import { format } from "date-fns";
import * as S from "./Calendar.styled";

function Calendar({ selected, setSelected }) {
  let footer = (
    <S.CalendarPeriod>
      <S.CalendarP>Выберите срок исполнения</S.CalendarP>
    </S.CalendarPeriod>
  );

  if (selected) {
    footer = (
      <S.CalendarPeriod>
        <S.CalendarP>
          Срок исполнения:
          <span>{format(selected, "dd.MM.yy", { locale: ru })}</span>
        </S.CalendarP>
      </S.CalendarPeriod>
    );
  }
  return (
    <S.CalendarWrap>
      <S.CalendarLabel>Даты</S.CalendarLabel>
      <S.StyledCalendar>
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
          locale={ru}
          style={{ margin: "0px" }}
        />
      </S.StyledCalendar>
    </S.CalendarWrap>
  );
}

export default Calendar;
