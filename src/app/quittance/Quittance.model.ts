export interface Quittance{
    id?:number,
    libelle:string,
    montant:number,
    dateAjout:Date,
    dateSignature:Date,
    devisId:number,
    libelleDevis?:string,
    dossierSinistreId:number,
    dateAjoutDossierSinistre?:Date,
    montantAssuranceDossierSinistre?:number,
    montantSinistreDossierSinistre?:number,
    observationDossierSinistre?:string,
    AssureurId:number,
    designationAssureur?:string,
    addressAssureur?:string
    
}
export interface Devis{
    id:number,
    libelle:string
} 