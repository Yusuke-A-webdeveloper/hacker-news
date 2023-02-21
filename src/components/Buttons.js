import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Buttons = () => {
  const { page, numPages, handlePage, loading } = useGlobalContext();

  return (
    <Wrapper>
      <button
        disabled={loading}
        className="prev-btn"
        onClick={() => handlePage('dec')}
      >
        prev
      </button>
      <h4>
        <span>{page + 1}</span>of<span>{numPages}</span>
      </h4>
      <button
        disabled={loading}
        className="next-btn"
        onClick={() => handlePage('inc')}
      >
        next
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: 20px;
  button {
    display: inline-block;
    font-size: 15px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 3px 5px;
    color: #fff;
    background: var(--bg);
    border: 1px solid;
    cursor: pointer;
    transition: 0.3s ease-out;
    &:hover {
      opacity: 0.5;
    }
  }
  button:disabled {
    cursor: not-allowed;
  }
  h4 {
    font-weight: 400;
    font-size: 20px;
    display: flex;
    gap: 10px;
  }
`;

export default Buttons;
