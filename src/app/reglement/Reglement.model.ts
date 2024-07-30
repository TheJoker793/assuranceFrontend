export interface Reglement{
    id?:number,
    numero:string,
    dateRemise:Date,
    situationId?:number,
    libelleSituation?:string,
    compteBancaireId?:string,
    libelleCompteBancaire?:string,
    ribCompteBancaire?:string,
    cleCompteBancaire?:string,
    typeReglementId?:number,
    libelleTypeReglement?:string,
    personneId?:number,
    cinPersonne?:string,
    prenomPersonne?:string,
    nomPersonne?:string


}
export interface TypeReglement{
    id?:number,
    libelle:string
}
export interface CompteBancaire{
    id?:number,
    libelle:string,
    rib:string,
    cle:string
}