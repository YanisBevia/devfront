import { Categorie } from './categorie.model';

export class Skill {
    id !: number;
    nom !: string;
    echange !: string;
    date !: Date;
    categorie !: Categorie;
    image !: string;
}