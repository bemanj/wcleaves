import { Hero } from './../model/hero';
import { Component, OnInit } from '@angular/core';
import { AngularPrint } from 'angular-print';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  title = 'Midas';
  heroes = [
    new Hero(1, 2, 'Boxes', 'Goldcreek 27.68 @ 61', 1383.48, 2766.96),
    new Hero(1, 1, 'KG', 'PHOS - 2AC 25KS', 400, 400),
    new Hero(1, 1, 'Bag', 'PHOS -2AC', 16, 16),
    new Hero(1, 500, 'Cut', '20 BXS PORK C.FAT ROSDERRA ', 58, 29000)
  ];

  myHero = this.heroes[0];
  constructor() { }

      print(printSectionId): void {
        let printContents, popupWin;
        printContents = document.getElementById(printSectionId).innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8" />
            <title> Receipt</title>
            <style>
                .val td {
                    border: 1px solid black;
                    border-collapse: collapse;
                }
            </style>
        
        
        </head>
        
        <body class="text-left" onload="window.print();window.close()">${printContents}
        </body>
        </html>
        
          `
        );
        popupWin.document.close();
      }

  ngOnInit() {
  }

}

// <script type="text/javascript" src="inline.bundle.js"></script>
// <script type="text/javascript" src="polyfills.bundle.js"></script>
// <script type="text/javascript" src="styles.bundle.js"></script>
// <script type="text/javascript" src="vendor.bundle.js"></script>
// <script type="text/javascript" src="main.bundle.js"></script>