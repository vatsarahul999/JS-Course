import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class InputService {
    sayHello() {
        alert("Hello");
    }
    getMessage() {
        return "Message";
    }
}