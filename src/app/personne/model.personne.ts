export interface Personne{
    id:number,
    cin:string,
    prenom:string,
    nom:string,
    dateNaissance:Date,
    structureId:number,
    libelleStructure?:string
}