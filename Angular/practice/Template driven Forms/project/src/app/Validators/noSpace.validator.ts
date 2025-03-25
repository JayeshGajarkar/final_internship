import { AbstractControl} from "@angular/forms";

export const noSpace = (control: AbstractControl) => {
  if (control.value && control.value.indexOf(' ') >= 0) {
    return { noSpace: true };
  }
  return null;
}