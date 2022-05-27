import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class authService{

    loggedIn: boolean = true

    logIn(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false
    }

    isLoggedIn(){
        return this.loggedIn
    }
}