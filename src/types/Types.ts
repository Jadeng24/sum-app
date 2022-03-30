// eslint-disable-next-line no-shadow
export enum Pages {
    BoatBuilder = 'boat-builder',
    Boats = 'boats',
    Contact = 'contact',
    Engines = 'engines',
    Home = 'home',
    Shop = 'shop',
}

export interface productColor {
    name: string;
    color: string;
}

export interface Boat {
    name: string;
    length: number;
    type: string;
    width: number;
    model: string;
    featured_image?: string;
    description: string;
    seats: number;
    weight: number;
    fuel: number;
    height: number;
    price: number;
    storage: number;
    weightCapacity: number;
    hull: string;
    id: number;
}
