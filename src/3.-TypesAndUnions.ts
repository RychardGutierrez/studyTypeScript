//Types and alias

type ID = string; //aliases
type PopularTag = string;
type MaybePopularTag = PopularTag | null;
//Types and unions

interface UserInterface {
  id: ID;
  name: string;
  surname: string;
}

const popularTags: PopularTag[] = ["dragon", "Tiger"];

const dragonsTag: MaybePopularTag = "dragon";

const userName: string = "Lucas";

const pageName: string | number = "1";

const errorMessage: string | null = null;

let userImplement: UserInterface | null = null;

let someprop: string | number | null | undefined | string[] | object;
