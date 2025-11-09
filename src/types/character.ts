export type CharacterId = string;

export type Character = {
    id: CharacterId;
    name: string;
    status: string;
    species: string;
    image: string;
};

export type Info = {
    count: number;
    pages: number;
    next: string;
    prev: string;
}