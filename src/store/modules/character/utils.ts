import { Character, CharacterCore, CharacterQueryResult } from ".";

export const mapCharacterResult = (item: CharacterQueryResult): Character => {
    const core = item as CharacterCore;
    return {
      ...core,
      weapons: item.weapons?.items,
      skills: item.skills?.items,
      companions: item.companions?.items,
      magicalItems: item.magicalItems?.items,
    };
  };