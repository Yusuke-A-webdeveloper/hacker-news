import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <h2>loading...</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin-top: 100px;
  h2 {
    font-size: 30px;
    color: var(--main);
    text-transform: capitalize;
  }
`;

export default Loading;
