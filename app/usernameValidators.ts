import {Control} from 'angular2/common';

export class UsernameValidators {

  static shouldBeUnique(control: Control) {
    return new Promise((resolve, reject) => {
      // resolve(1)
      // reject("")
      setTimeout(function() {
        if (control.value == 'Sam') {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  static cannotContainSpace(control: Control) {
    if (control.value.indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
}