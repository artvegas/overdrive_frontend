import { Component } from '@angular/core';
import { Profile } from './profile';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    title = 'profile';

    async ngAfterViewInit() {
        await this.loadScript('./src/js/main.js');
        await this.loadScript('./src/js/genre.js');
    }

    private loadScript(scriptUrl: string) {
        return new Promise((resolve, reject) => {
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        })
    }

    profile : Profile = {
        username : 'artvegas',
        email     : 'aritra@gmail.com',
        followers : 213123,
        following : 213,
        comics    : 12,
        likes     : 123
    };
    

    scroll(el: HTMLElement) {
        el.scrollIntoView();
    }


}
