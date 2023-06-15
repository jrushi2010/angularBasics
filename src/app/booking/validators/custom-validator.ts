import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {

    static ValidateName(control: AbstractControl){
        const value = control.value as string;
        if(value.includes('test')){
            return {
                invalidName: true
            }
        }
        return null;
    }

    static ValidateSpecialChar(char: string){
        return (control: AbstractControl)=>{
        const value = control.value as string;
        if(value.includes(char)){
            return {
                invalidSpecialChar: true
            }
        }
        return null;
        }
    }

    static validateDate(control:FormGroup){
        const checkindate :any = new Date(control.get('checkindate')?.value);
        const checkoutdate :any = new Date(control.get('checkoutdate')?.value);
        const diffTime = checkoutdate - checkindate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        // console.log(diffDays);
        // console.log(diffTime);
        if(diffDays <= 0){
            control.get('checkoutdate')?.setErrors({
                invalidDate : true,
            })
            return {
                invalidDate : true,
            }
        }
        return null;
    }
}