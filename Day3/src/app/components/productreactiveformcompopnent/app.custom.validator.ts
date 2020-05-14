import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Product } from '../../models/app.product';
// custom validator class must contain static metyhod
export class MyCustomValidator {
  // if the method is validated
  // then it will return null
  // else it will retun JSON object for
  // invalidation
  // AbstractControl --> represents HTML UI element
  // on which the validations are applied
  static checkEven(ctrl: AbstractControl) : any {
     const val: number  = parseInt(ctrl.value);
     if (val % 2 === 0) {
        return null;
     } else {
       return {noteven:true}
     }
  }

  static IsUnique( prds : Array<Product>) : ValidatorFn {
      return (ctrl : AbstractControl) : any => 
      { 
         const id : number = parseInt(ctrl.value);
         console.log(JSON.stringify(prds));
         let val = prds.some( a => {return a.ProductId == id});
         if(val == true) 
         {
            return  {isnotunique: val};
         }
         else
         {
            return null; 
         }
      }
   }
}
