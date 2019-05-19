import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SettingService } from './setting.service';


@Component({
    selector: 'setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css']
})
export class SettingComponent {
    title = 'profile';
    public userFile: any = File;

    constructor(private settingService: SettingService){
      this.settingService = settingService;
    }

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

    userPasswordForm = new FormGroup({
      password: new FormControl(''),
      secondPassword: new FormControl(''),
      username: new FormControl(document.cookie.split("=")[1])
    });

    userDisplayNameForm = new FormGroup({
      username: new FormControl('')
    });

    userBioForm = new FormGroup({
      bio: new FormControl(''),
      username: new FormControl(document.cookie.split("=")[1])
    });

    updateBio(userBio){
      this.settingService.updateBio(userBio)
        .subscribe( data => {
          console.log("updateBio subscribe");
          console.log(data);
        });
    }

    updateDisplayName(displayName){
      // displayName.username = document.cookie.split("=")[1];
      console.log("in updateDisplayName");
      console.log(displayName.username);
      document.cookie = "username=" + displayName.username;
      this.settingService.updateDisplayName(displayName)
        .subscribe( data => {
          console.log("updateDisplayName subscribe");
          console.log(data);
        });
    }

    updateUserPassword(userPass){
      console.log(userPass);
      if(userPass.password == userPass.secondPassword){
        this.settingService.updatePassword(userPass)
          .subscribe( data => {
            console.log("updateUserPassword subscribe");
            console.log(data);
          });
        console.log("passwords are same");
      } else{
        console.log("need to be the same password");
      }
    }

    onSelectFile(event){
      const file = event.target.files[0];
      console.log(file);
      this.userFile = file;
    }

    updatePic(){
      const formData = new FormData();
      formData.append("pic", this.userFile);
      this.settingService.updateProfilePic(formData)
      .subscribe(data => {
        console.log(data);
      });
    }

    scroll(el: HTMLElement) {
        el.scrollIntoView();
    }


}
