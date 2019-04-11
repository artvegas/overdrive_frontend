import { Component } from '@angular/core';

@Component({
    selector: 'setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css']
})
export class SettingComponent {
    title = 'profile';

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

    scroll(el: HTMLElement) {
        el.scrollIntoView();
    }


}
