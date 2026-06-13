import { StyledBrick } from "./Brick.styled";

export default function Brick({ category, letter }) {
  return (
    <StyledBrick $category={category}>
      {category === "tile" ? (letter === "?" ? "" : letter) : category}
    </StyledBrick>
  );
}
