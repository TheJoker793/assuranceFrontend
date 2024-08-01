export interface TypeSinistre{
    id?:number,
    libelle:string,
}
export interface Sinistre{
    id?:number,
    libelle:string,
    reference:string,
    description:string,
    montantExpertise:number,
    montantIndemniser:number,
    dateSinistre:Date,
    dateAjout:Date,
    degatMateriel:string,
    cause:string,
    lieux:string,
    objet:string,
    dateValidation:Date,
    typeSinistreId?:number,
    libelleTypeSinistre?:string,
    situationId?:number,
    libelleSituation?:string,
    personneId?:number,
    cinPersonne?:string,
    prenomPersonne?:string,
    nomPersonne?:string,
    dateNaissancePersonne?:Date


};
export interface Dossier{
    id?:number,
    libelle:string,
    reference:string,
    dateDeclaration:Date,
    motif:string,
    dateAjout:Date,
    montantExpertise:number,
    montantIdemniser:number
}
export interface DossierSinistre{
    //**dossier sinistre */ 
    id?:number;
    dateAjout:Date,
    montantAssurance:number,
    montantSinistre:number,
    observation:string,
    //**sinistre */
    sinistreId: number,
    libelleSinistre?: string,
    referenceSinistre?: string,
    descriptionSinistre?: string,
    montantExpertiseSinistre?:number,
    montantIndemniserSinistre?: number,
    dateSinistre?:Date,
    dateAjoutSinistre?:Date,
    degatMaterielSinistre?: string,
    causeSinistre?:string,
    lieuSinistre?:string,
    objetSinistre?:string,
    dateValidationSinistre?:Date,
        //**dossier sinistre */
    dossierId: number,
    libelleDossier?: string,
    referenceDossiser?: string,
    dateDeclarationDossiser?:Date,
    motifDossier?: string,
    dateAjoutDossier?:Date,
    montantExpertiseDossier?: number,
    montantIdemniserDossier?: number



}
