import { Component } from '@angular/core';

@Component({
    selector: 'editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent {
    title = 'Editor';

    async ngAfterViewInit() {
        await this.loadScript('./src/js/main.js');
        await this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-with-addons.js');
        await this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js');
        await this.loadScript('./src/js/canvas/js/literallycanvas.js');
        await this.loadScript('./src/js/customCanvas.js');
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
