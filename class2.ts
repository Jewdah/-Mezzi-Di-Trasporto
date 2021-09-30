export class Aircraft {
    private name:string;
    public colors: string;
    private airline:string;
    public capacity_pax:number;
    private weight_kg: number;     
    public   max_speed_kmh:number;    
          
   constructor(name:string, colors:string, airline:string, weight_kg:number,
        max_speed_kmh:number, capacity_pax:number){
       this.name=name;
       this.colors=colors;
       this.airline=airline;
       this.capacity_pax=capacity_pax;
       this.weight_kg=weight_kg;
       this.max_speed_kmh=max_speed_kmh;
       
   } 
   
     getattributes():any[] {
         return [this.name, this.colors, this.airline, this.capacity_pax, this.max_speed_kmh, this.weight_kg]
     }

   }
   
   /*let Avion_1 = new Aircraft("Airbus-A319", "rojo-blanco", "Avianca",75500 , 890, 108)
   let Avion_2 = new Aircraft("Airbus-321", "azul-blanco", "LATAM", 83000, 890, 150)

console.log(`Las caracteristicas del avion 1 son  ${Avion_1.getattributes()}`)
console.log(`Las caracteristicas del avion 2 son  ${Avion_2.getattributes()}`)*/
