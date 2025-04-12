import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AntiquesType, antiquesType } from '../class/antiguesType'
import { upperCaseValidator } from '../service/validators';

export function formConstructor( type:string, antiquesForm:FormGroup, fb:FormBuilder){
   
    const controlsToRemove = [
        'author',
        'page',
        'sculptor',
        'material',
        'artist',
        'style'
    ];
        
    controlsToRemove.forEach((control) =>{
        if(antiquesForm.contains(control)){
            antiquesForm.removeControl(control);
        }
    });

    if (type===antiquesType[1]){
        antiquesForm.addControl('author', fb.control('',[Validators.required, upperCaseValidator] ))
        antiquesForm.addControl('page', fb.control('', [Validators.required, Validators.min(5)]))
    }

    else if (type===antiquesType[2]){
        antiquesForm.addControl('sculptor', fb.control('', [Validators.required, upperCaseValidator]))
        antiquesForm.addControl('material', fb.control('', [Validators.required, Validators.minLength(3)]))
    }

    else if (type===antiquesType[3]){
        antiquesForm.addControl('artist', fb.control('', [Validators.required, upperCaseValidator]))
        antiquesForm.addControl('style', fb.control('', [Validators.required, Validators.minLength(3)]))
    }
}