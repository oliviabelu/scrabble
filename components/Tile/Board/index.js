import Tile from "..";
import styled from "styled-components";

// const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const tiles = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
];

export default function Board() {
  return (
    <StyledBoard>
      {tiles.map((tileRow) =>
        tiles.map((tileColumn) => {
          const key = tileRow.concat(tileColumn);
          console.log(key);
          return <Tile key={key} />;
        })
      )}
      ;
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  gap: 1px;
`;
