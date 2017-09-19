import { Component, OnInit } from '@angular/core';
import { AngularPrint } from 'angular-print';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  constructor() { }

      print(printSectionId): void {
        let printContents, popupWin;
        printContents = document.getElementById(printSectionId).innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
          <html>
            <head>
              <title>Print tab</title>
              <style>
              //........Customized style.......
              </style>
            </head>
        <body onload="window.print();window.close()">${printContents}
        <script type="text/javascript" src="inline.bundle.js"></script>
        <script type="text/javascript" src="polyfills.bundle.js"></script>
        <script type="text/javascript" src="styles.bundle.js"></script>
        <script type="text/javascript" src="vendor.bundle.js"></script>
        <script type="text/javascript" src="main.bundle.js"></script>
        </body>
        
          </html>`
        );
        popupWin.document.close();
      }

  ngOnInit() {
  }

}
