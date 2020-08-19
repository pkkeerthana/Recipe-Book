import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ShoppingComponent } from "./shopping.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { SharedModule } from "../shared/shared.module";
import { LoggingService } from "../logging.service";

@NgModule({
    declarations:[
        ShoppingComponent,
        ShoppingEditComponent,
    ],
    imports:[
        RouterModule.forChild([
            { path:'', component: ShoppingComponent},
        ]),
        FormsModule,
        SharedModule
    ],
    exports:[
        ShoppingComponent,
        ShoppingEditComponent
    ],
    providers:[LoggingService]
})
export class ShoppingModule {

}