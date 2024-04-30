import IImage from "./IImage";

interface IDefault {
    id: string,
    name: string,
    russian: string,
    image: IImage,
    url: string,
}

export interface IRoles {
    roles: string[],
    roles_russian: string[],
    character: null | IDefault,
    person: null | IDefault,
}
