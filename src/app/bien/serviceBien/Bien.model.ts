export interface Bien{
    id?:number,
    code:string,
    daeAcquisation:Date,
    typeBienId?:number,
    libelleTypeBien?:string,
    dureeVieTypeBien?:number,
    structureId?:number,
    libelleStructure?:string
}
export interface TypeBien{
    id?:number,
    libelle:string,
    dureeVie:number
}