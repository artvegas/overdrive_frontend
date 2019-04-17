import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CreateService } from './create.service';

const genreOptions = ["Action", "Fantasy", "Comedy", "Drama", "Sports", "Horror"]

@Component({
    selector: 'create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent {
    title = 'Create';

    constructor (private createService: CreateService) {
      this.createService = createService;
    }

    async ngAfterViewInit() {
        await this.loadScript('./src/js/main.js');
    }

    ngOnInit(){
      console.log("in ngOnInit");
      this.onSubmit(this.comicForm);
    }

    private loadScript(scriptUrl: string) {
        return new Promise((resolve, reject) => {
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        })
    }

    comicForm = new FormGroup({
      comicName: new FormControl(''),
      genre: new FormControl(''),
      description: new FormControl('')
    })

    onSubmit(comicSeries) {
      this.createService.createComicSeries(comicSeries);
    }

}
