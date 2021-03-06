import { element } from 'protractor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-Databinding';
  serverElements = [{type: 'Server', name: 'Test', content: 'Just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'Server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'Blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
  onChangeFirst(){
    this.serverElements[0].name = 'Changed';
  }
  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }

}


