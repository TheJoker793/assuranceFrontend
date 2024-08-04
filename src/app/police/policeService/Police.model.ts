export interface Police{
    id?:number,
    code:string,
    dateAjout:Date,

    personneId:number,
    cinPersonne?:string,
    prenomPersonne?:string,
    nomPersonne?:string,

    assureurId:number,
    designationAssureur?:string,
    addressAssureur?:string,

    contratId:number,
    dateEffet?:Date,
    dateEcheance?:Date,
    dateSignature?:Date,
    exerciceContrat?:number,
    
    marchandiseId:number,
    codeMarchandise?:string,
    natureMarchandise?:string,
    
    articleId:number,
    libelleArticle?:string,
    referenceArticle?:string,
    prixArticle:number,
    
    typeBienId:number,
    libelleTypeBien?:string
}