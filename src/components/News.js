import moment from 'moment/moment';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Loading from './Loading';

const News = () => {
  const { loading, news, removeNews } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {news.map((item) => {
        const { objectID: id, url, title, author, created_at: date } = item;
        return (
          <article key={id}>
            <h2>{title}</h2>
            <div className="author">
              <h4>{moment(date).format('MMM Do YY')}</h4>
              <h3>
                by <span>{author}</span>
              </h3>
            </div>
            <aside>
              <a href={url} target="_blank" rel="noopener noreferrer">
                detail
              </a>
              <button className="remove-btn" onClick={() => removeNews(id)}>
                remove
              </button>
            </aside>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  article {
    width: calc(50% - 20px);
    background: var(--bg);
    padding: 20px;
    h2 {
      color: var(--main);
    }
    .author {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      border-bottom: 1px solid var(--main);
    }
    h4 {
      color: var(--main);
      font-size: 14px;
    }
    h3 {
      color: var(--main);
      font-size: 16px;
      span {
        font-size: 20px;
      }
    }
    aside {
      display: flex;
      align-items: center;
      gap: 20px;
      a,
      button {
        display: inline-block;
        font-size: 15px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 4px 6px;
        color: var(--main);
        background: var(--bg);
        height: 30px;
        border: none;
        cursor: pointer;
        transition: 0.3s ease-out;
        &:hover {
          background: var(--main);
          color: var(--bg);
        }
      }
    }
  }
  @media (max-width: 650px) {
    article {
      width: 100%;
    }
  }
`;

export default News;
