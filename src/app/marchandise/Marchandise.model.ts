export interface Marchandise{
    id?:number,
    code:string,
    nature:string,
    typeTransportId?:number,
    libelleTypeTransport?:number
}
export interface TypeTransport{
    id?:number,
    libelle:string
}