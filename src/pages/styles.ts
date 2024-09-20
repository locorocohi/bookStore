import styled from 'styled-components';

export const Catalog = styled.section`
  padding: 0 80px;
  display: flex;
  flex-direction: column;

  .main.title {
    color: ${(p) => p.theme.colors.dark};
  }

  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  @media (max-width: 1030px) {
    padding: 0 15px;
    .toolbar {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 20px;
    }
  }
`;
