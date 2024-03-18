import styled from 'styled-components';
import calendarIcon from 'assets/calendar.svg';

export const CalendarButton = styled.div`
  display: flex;
  padding: 13px 14px;
  gap: 10px;
  border-top: 1px solid var(--grey-light);
`;

export const DateDisplay = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  width: 100%;
  border: 1px solid var(--grey-light);
  border-radius: 5px;
  padding: 8px 12px;
  text-align: start;
  margin-bottom: 10px;

  span {
    color: var(--grey-medium);
  }

  &::before {
    content: url(${calendarIcon});
    aspect-ratio: 1/1;
  }
`;

export const CalendarWrapper = styled.div`
  height: fit-content;
  border: 1px solid var(--grey-light);
  border-radius: 5px;

  .rdrCalendarWrapper,
  .rdrDateRangeWrapper,
  .rdrMonthAndYearWrapper,
  .rdrMonth {
    width: 100%;
  }

  // 날짜 버튼
  .rdrDay {
    /* height: auto; */
    /* aspect-ratio: 1/1; */

    // 선택 날짜 버튼의 시작과 끝
    /* .rdrStartEdge,
    .rdrEndEdge {
      border-radius: 50%;
    } */

    /* .rdrDayHovered {
      border-radius: 50%;
    } */

    // 날짜 텍스트 (1, 2, 3, 4, 5..)
    .rdrDayNumber {
      span {
        font-weight: 500;
      }
    }

    // 선택된 Range
    /* .rdrInRange {
      background: var(--grey-light);
    } */

    // 선택된 Range 안의 텍스트
    /* .rdrInRange ~ .rdrDayNumber span {
      color: black;
    } */

    /* .rdrDayStartPreview,
    .rdrDayEndPreview {
      border-radius: 50%;
    } */
  }

  /* header(MM월 YYYY일) UI */
  .rdrMonthAndYearWrapper {
    padding: 0;
    border-bottom: 1px solid var(--grey-light);
    margin-bottom: 10px;

    .rdrMonthAndYearPickers {
      font-size: 1.6rem;
      font-weight: 800;
    }

    .rdrNextPrevButton {
      background-color: initial;
    }

    /* prev button ui */
    .rdrPprevButton i {
      border-width: 0;
      position: relative;
      width: 8px;

      &::after,
      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 1px;
        border-radius: 10px 0 0 10px;
        background-color: var(--grey-dark);
      }

      &::after {
        top: -2.4px;
        transform: rotate(-45deg);
      }

      &::before {
        top: 2.4px;
        transform: rotate(45deg);
      }
    }

    /* next button ui */
    .rdrNextButton i {
      border-width: 0;
      position: relative;
      width: 8px;

      &::after,
      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 1px;
        border-radius: 10px 0 0 10px;
        background-color: var(--grey-dark);
      }

      &::after {
        top: -2.4px;
        transform: rotate(45deg);
      }

      &::before {
        top: 2.4px;
        transform: rotate(-45deg);
      }
    }
  }
`;
