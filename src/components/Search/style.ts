import styled from "styled-components";

export const SearchStyledDiv = styled.div`
  display: flex;
  padding: 20px;
  gap: 1rem;

  /* Responsive layout for mobile screens */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 0;
    width: 90%;
  }

  input {
    width: 15rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    padding: 0.25rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #328132;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  button {
    width: 7rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    padding: 0.25rem;
    background: #328132;
    border: 1px solid #328132;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    &:hover {
      background: #286f28;
      border-color: #286f28;
    }

    &:active {
      background: #225d22;
      border-color: #225d22;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
