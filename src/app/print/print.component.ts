import { Component, OnInit } from '@angular/core';
import { AngularPrint } from 'angular-print';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']    
})
export class PrintComponent implements OnInit {

  constructor() { }

  print(printSectionId): void {
    let printContents, popupWin;
    printContents = document.getElementById(printSectionId).innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset='UTF-8'>
      
      <title>Editable Invoice</title>
      
      <link rel='stylesheet' href='css/style.css'>
      <link rel='stylesheet' href='css/print.css' media="print">
      <script src='js/jquery-1.3.2.min.js'></script>
      <script src='js/example.js'></script>
    
    </head>

    <body onload="window.print();window.close()">${printContents}
       
     
      
    </body>
    
      </html>`
    );
    popupWin.document.close();
  }

  ngOnInit() {
  }

}
