import styled from 'styled-components';

export const Main = styled.main`
  height: calc(100vh - (var(--header-height) + var(--navbar-height)));
  background-color: var(--grey-light);
  overflow: auto;
`;

const SIDE_GAP = '24px';

export const Form = styled.form`
  div ~ input {
    margin-top: 12px;
  }

  label ~ div,
  label ~ input,
  label ~ button {
    margin-bottom: 20px;
  }
`;

export const FormSection = styled.section`
  background-color: var(--main-white);
  padding: 20px ${SIDE_GAP};
`;

export const FormTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  margin: 14px ${SIDE_GAP};
`;

export const LocationFormSection = styled(FormSection)`
  div {
    margin-bottom: 12px;
  }
`;
