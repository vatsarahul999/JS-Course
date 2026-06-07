import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Logger {
    writeWarning(message: string) {
        console.warn(message);
    }
     writeError(message: string) {
        console.error(message);
    }
}