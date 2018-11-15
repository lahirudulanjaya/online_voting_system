import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface VoterElement {
  name: string;
  registrationNumber: string;
  academicYear: string;
}

const ELEMENT_DATA: VoterElement[] = [
  { name: 'Sanduni K.', registrationNumber: '2016/CS/01', academicYear: '2015/2016' },
  { name: 'Lahiru D.', registrationNumber: '2016/CS/02', academicYear: '2015/2016' },
  { name: 'Sanduni D.', registrationNumber: '2016/CS/03', academicYear: '2015/2016' },
  { name: 'Hashini P.', registrationNumber: '2016/CS/04', academicYear: '2015/2016' },
  { name: 'Dasuni G.', registrationNumber: '2016/CS/05', academicYear: '2015/2016' },
  { name: 'Tharushi J.', registrationNumber: '2016/CS/06', academicYear: '2015/2016' },
  { name: 'Ashera S.', registrationNumber: '2016/CS/07', academicYear: '2015/2016' },
  { name: 'Tikiri D.', registrationNumber: '2016/CS/08', academicYear: '2015/2016' },
  { name: 'Vindula S.', registrationNumber: '2016/CS/09', academicYear: '2015/2016' },
  { name: 'Hiruni M.', registrationNumber: '2016/CS/10', academicYear: '2015/2016' },
];


@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  displayedColumns: string[] = ['registrationNumber', 'name', 'academicYear'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
    constructor() { }

    ngOnInit() {
      this.dataSource.paginator = this.paginator;
    }

  }
