import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Search = () => {
  const { query, handleSubmit } = useGlobalContext();
  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSubmit(e.target.value)}
        />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 20px 0px;
  form {
    width: 50%;
    input {
      width: 100%;
      font-size: 20px;
      padding: 5px 10px;
      text-transform: capitalize;
    }
  }
  @media (max-width: 415px) {
    form {
      width: 100%;
    }
  }
`;

export default Search;
