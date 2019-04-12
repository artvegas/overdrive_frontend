import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    title = 'Create';

    async ngAfterViewInit() {
        await this.loadScript('./src/js/main.js');
    }

    private loadScript(scriptUrl: string) {
        return new Promise((resolve, reject) => {
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        })
    }


    userForm = this.fb.group({
        email: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        password2: ['', Validators.required],
    });

    constructor( private fb: FormBuilder, private _registerService: RegisterService,) { }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.userForm.value);
    }

}
