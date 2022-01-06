import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'nullSafe' })
export class NullSafePipe implements PipeTransform {
    transform(value: any, placeholder: string = "/"): any {
        return value != undefined && value ? value : placeholder;
    }
}