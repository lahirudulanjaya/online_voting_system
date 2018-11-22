import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface VoterElement {
  registrationNumber: string;
  name: string;
  academicYear: string;
}

const ELEMENT_DATA: VoterElement[] = [
  { registrationNumber: '2016/CS/01', name: 'Sanduni K.', academicYear: '2015/2016' },
  { registrationNumber: '2016/CS/02', name: 'Lahiru D.', academicYear: '2015/2016' },
  { registrationNumber: '2016/CS/03', name: 'Sanduni D.', academicYear: '2015/2016' },
  { registrationNumber: '2016/CS/04', name: 'Hashini P.', academicYear: '2015/2016' },
  { registrationNumber: '2016/CS/05', name: 'Dasuni G.', academicYear: '2015/2016' },
  { registrationNumber: '2016/CS/06', name: 'Tharushi J.', academicYear: '2015/2016' },
  { registrationNumber: '2016/CS/07', name: 'Ashera S.', academicYear: '2015/2016' },
  { registrationNumber: '2016/CS/08', name: 'Tikiri D.', academicYear: '2015/2016' },
  { registrationNumber: '2016/CS/09', name: 'Vindula S.', academicYear: '2015/2016' },
  { registrationNumber: '2016/CS/10', name: 'Hiruni M.', academicYear: '2015/2016' },
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
