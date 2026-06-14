import { AbstractControl } from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';

export function noNumberValidator(control: AbstractControl) {
  let value = control.value;

  if (!value) {
    return null;
  }

  const containNumbers = /\d/.test(value);
  return containNumbers ? { containNumbers: true } : null;
}
