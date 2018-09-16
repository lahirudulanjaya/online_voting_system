import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[passwordvalidator]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: SelectRequredValidatorDirective,
      multi: true
  }]

})

export class SelectRequredValidatorDirective implements Validator {
  @Input() passwordvalidator :string;
  validate(control: AbstractControl): { [key: string]: any } | null {

      var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      if (re.test(control.value)){
        return {'strength':true};

    }
    return null;
  }
}
