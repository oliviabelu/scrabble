import Brick from "../Brick";
import { StyledTileList } from "./Rack.styled";
import { useEffect, useState } from "react";

const tileNumbers = [1, 2, 3, 4, 5, 6, 7];

export default function Rack({ tilebag }) {
  const [rackTiles, setRackTiles] = useState([]);

  useEffect(() => {
    const chosenTiles = tileNumbers.map((tilenumber) => {
      const randomIndex = Math.floor(Math.random() * tilebag.length);
      return tilebag[randomIndex];
    });
    setRackTiles(chosenTiles);
  }, []);

  return (
    <StyledTileList>
      {rackTiles.map((rackTile, index) => (
        <li key={index}>
          <Brick category={"tile"} letter={rackTile} />
        </li>
      ))}
    </StyledTileList>
  );
}
