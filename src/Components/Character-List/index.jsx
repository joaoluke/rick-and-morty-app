import React from "react";
import Character from "../Character";

const CharacterList = (props) => {
  return (
    <div>
      {props.list.map((character, index) => (
        <Character 
          key={index} 
          name={character.name} 
          gender={character.gender} 
          species={character.species} 
          status={character.status}
          origins={character.origin.name}
          image={character.image} />
      ))}
    </div>
  );
};

export default CharacterList;
