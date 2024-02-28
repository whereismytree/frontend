import styled from 'styled-components';
import calendarIcon from 'assets/calendar.svg';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 13px 14px;
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

export const DateInputWrapper = styled.div`
  border: 1px solid var(--grey-light);
  border-radius: 5px;

  .rdrMonth {
    border-bottom: 1px solid var(--grey-light);
  }

  .rdrDefinedRangesWrapper {
    display: none;
  }

  .rdrMonthAndYearWrapper {
    height: 48px;
    padding: 0;
    border-bottom: 1px solid var(--grey-light);

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
