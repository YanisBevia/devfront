import { Categorie } from './categorie.model';

export class Skill {
    id !: number;
    nom !: string;
    prix !: number;
    date !: Date;
    categorie !: Categorie;
    image !: string;
}