import styled from 'styled-components';
import Search from './components/Search';
import Buttons from './components/Buttons';
import News from './components/News';
import { DefaultTitle } from './components/Title';

function App() {
  return (
    <Wrapper>
      <DefaultTitle>
        <h1>search hacker news</h1>
      </DefaultTitle>
      <Search />
      <Buttons />
      <News />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  max-width: 900px;
  margin: 80px auto 50px;
  @media (max-width: 670px) {
    padding: 20px;
  }
`;

export default App;
