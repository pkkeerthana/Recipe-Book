import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { ShoppingService } from "./shopping/shopping.service";
import { RecipeService } from "./recipes/recipe.service";
import { AuthInterceptorService } from "./auth/auth.interceptor.service";
import { LoggingService } from "./logging.service";


@NgModule({
    declarations:[

    ],
    imports:[

    ],
    providers: [
        ShoppingService,
        RecipeService,
        { provide: HTTP_INTERCEPTORS,
          useClass:AuthInterceptorService,
          multi:true
        },
        // LoggingService
      ],
})
export class CoreModule {
   

}