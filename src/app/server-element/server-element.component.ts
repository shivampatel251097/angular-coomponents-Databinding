import { element } from 'protractor';
import { Component, OnInit,
   Input, ViewEncapsulation,
    OnChanges, SimpleChanges, DoCheck,
     AfterContentInit, AfterContentChecked,
     AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
 OnChanges, DoCheck 
 ,AfterContentInit ,AfterContentChecked,
 AfterViewChecked, AfterViewInit, OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading',{static:true}) header: ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;
  constructor() {
    console.log("Constructor called!!");
   }
   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called!!');
    console.log(changes);
   }

  ngOnInit() {
    console.log('ngInInit Called!!');
    console.log('Text content'+this.header.nativeElement.textContent);
    console.log('Text content of Paragraph'+this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(){
    console.log('ngDoCheck Called!!');
  }
 
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called!!');
    console.log('Text content of Paragraph'+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called!!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called!!');
    console.log('Text  view'+this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called!!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called!!');
    
  }
}
