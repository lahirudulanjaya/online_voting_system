import { Component, OnInit } from '@angular/core';
import { RulesService } from '../../shared/rules.service';
import { Rules } from '../../shared/rules.model';

@Component({
  selector: 'app-user-rules',
  templateUrl: './user-rules.component.html',
  styleUrls: ['./user-rules.component.css']
})
export class UserRulesComponent implements OnInit {
  rule: Rules[];

  constructor(private rulesService: RulesService) { }

  ngOnInit() {
    this.rulesService.getRules().subscribe(
      res => {
        this.rule = res as Rules[];
      }
    );
  }

}
