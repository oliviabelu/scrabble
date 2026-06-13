import styled, { css } from "styled-components";

export const StyledBrick = styled.div`
  width: var(--cell-size);
  height: var(--cell-size);
  border-radius: var(--brick-border-radius) 0;
  margin: var(--cell-margin);

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;

  background-color: var(--cell);

  ${(props) =>
    props.$category === "tile" &&
    css`
      background-color: var(--tile);
      color: white;

      width: var(--tile-size);
      height: var(--tile-size);

      margin: var(--tile-margin);
    `}

  ${(props) =>
    props.$category === "start" &&
    css`
      background-color: var(--cell-start);
      color: var(--cell-start-color);
      font-size: 10px;
    `}

  ${(props) =>
    props.$category === "2B" &&
    css`
      background-color: var(--cell-double-letter);
      color: var(--cell-double-letter-color);
    `}

    ${(props) =>
    props.$category === "3B" &&
    css`
      background-color: var(--cell-triple-letter);
      color: var(--cell-triple-letter-color);
    `}

    ${(props) =>
    props.$category === "2W" &&
    css`
      background-color: var(--cell-double-word);
      color: var(--cell-double-word-color);
    `}
    ${(props) =>
    props.$category === "3W" &&
    css`
      background-color: var(--cell-triple-word);
      color: var(--cell-triple-word-color);
    `}
`;
