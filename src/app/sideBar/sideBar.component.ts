import { Component } from "@angular/core";

@Component({
    selector:'sideBar',
    templateUrl: './sideBar.component.html',
    styleUrls:['./sideBar.component.css'],
})

export class SideBarComponent{

    allPerson=[{

        id:100,
        name:"Jack",
        age:18,
    
      },
      {
    
        id:200,
        name:"Jack",
        age:18,
    
      },{
    
        id:300,
        name:"Jack",
        age:18,
    
      }]

    shouldShow=false;
  showSpells=false;
  showMonsters=false;
  showTraps=false;
  showChar=false;
  showTerrain=false;


}