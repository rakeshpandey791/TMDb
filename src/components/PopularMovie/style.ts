import styled from "styled-components";

export const PopularMovieStyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

  .movie-item {
    width: 25%;
    min-height: 10vh;
    background: #ffffff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    @media screen and (max-width: 768px) {
      width: 90%;
    }

    .movie-item-container {
      display: flex;
      align-items: center;

      .img {
        width: 7rem;
        height: 7rem;
        object-fit: cover;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 1rem;
      }

      .movie-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #333;
          margin: 0;
        }

        .date {
          font-size: 1rem;
          font-weight: 500;
          color: #777;
          margin: 0;
        }

        .description {
          font-size: 0.9rem;
          font-weight: 400;
          color: #555;
          line-height: 1.4;
          margin: 0;
        }
      }
    }
  }
`;
