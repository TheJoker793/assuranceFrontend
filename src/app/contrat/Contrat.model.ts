export interface Contrat{
    id?:number,
    dateEffet:Date,
    dateEcheance:Date,
    dateSignature:Date,
    exercice:number,
    natureContratId?:number,
    libelleNatureContrat?:string,
    quittancePrimeId?:number,
    libelleQuittancePrime?:string,
    montantQuittancePrime?:number
    dateAjoutQuittancePrime?:Date

} 