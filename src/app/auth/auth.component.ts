import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";

import { AuthService, AuthResponseData } from "./auth.service";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent implements OnDestroy{

    isLoginMode = true;
    isLoading  = false;
    error:string = null;
    @ViewChild(PlaceholderDirective, {static:false}) alertHost:PlaceholderDirective;

    private closeSub : Subscription;

    constructor( private authService: AuthService,
                 private router:Router,
                 private componentFactoryResolver:ComponentFactoryResolver){}


    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(f:NgForm) {

        if(!f.valid){
            return;
        }

        const email = f.value.email;
        const password = f.value.password;

        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;
        if(this.isLoginMode) {
            authObs = this.authService.signIn(email, password);
        } else {
            authObs = this.authService.signUp(email, password);
        }
    
        authObs.subscribe(
            resData => {
                console.log(resData);
                this.isLoading = false;
                this.router.navigate(['/recipes']);
            },errorMsg => {
                this.error = errorMsg;
                this.showErrorAlert(errorMsg);
                this.isLoading = false;
            }
        );
        f.reset();
    }

    onClose() {
        this.error = null;
    }

    private showErrorAlert(message: string) {
        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

        const componentRef = hostViewContainerRef.createComponent( alertCmpFactory );
        componentRef.instance.message = message;
        this.closeSub = componentRef.instance.close.subscribe(
            () => {
                this.closeSub.unsubscribe();
                hostViewContainerRef.clear();
            }
        );
    }

    ngOnDestroy() {
        if (this.closeSub) {
            this.closeSub.unsubscribe();
        }
    }
}