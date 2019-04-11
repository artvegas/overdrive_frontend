import { Component } from '@angular/core';

@Component({
    selector: 'popular',
    templateUrl: './popular.component.html',
    styleUrls: ['./popular.component.css']
})
export class PopularComponent {
    title = 'Genre';

    async ngAfterViewInit() {
        // await this.loadScript('./src/js/genre.js');
    }

    private loadScript(scriptUrl: string) {
        return new Promise((resolve, reject) => {
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        })
    }


}
