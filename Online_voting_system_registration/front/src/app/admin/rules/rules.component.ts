import { Component, OnInit } from '@angular/core';
import { RulesService } from '../../shared/rules.service';
import { NgForm } from '@angular/forms';
import { Rules } from '../../shared/rules.model';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  rule: Rules[];

  constructor(private rulesService: RulesService) { }
  showSucessMessage: boolean;
  serverErrorMessages: string;
  Onsubmit(form: NgForm) {
    this.rulesService.postRules(form.value).subscribe(
      res => {
        this.serverErrorMessages = '';
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
      },
      err => {
        this.serverErrorMessages = err.error;

      }
    )
  }
  ngOnInit() {
    this.rulesService.getRules().subscribe(
      res => {
        this.rule = res as Rules[];
      }
    );
  }

  Onedit(ruleElement: Rules) {
    this.rulesService.selectedRules = ruleElement;
  }

}
