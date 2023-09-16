import { Component, ViewEncapsulation } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class MultiStepFormComponent{

  nextStep(stepper: MatStepper): void {
    stepper.next();
  }

  prevStep(stepper: MatStepper): void {
    stepper.previous();
  }
}
