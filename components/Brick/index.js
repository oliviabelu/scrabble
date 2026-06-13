import { StyledBrick } from "./Brick.styled";

export default function Brick({ category, tileLetter, tileValue, onClick }) {
  function handleClick() {
    category === "tile" ? onClick(tileLetter) : onClick();
  }
  return (
    <StyledBrick type="button" onClick={handleClick} $category={category}>
      {category === "tile" ? (
        tileLetter === "?" ? (
          ""
        ) : (
          <>
            <div>{tileLetter}</div>
            <div>{tileValue}</div>
          </>
        )
      ) : (
        category
      )}
    </StyledBrick>
  );
}
