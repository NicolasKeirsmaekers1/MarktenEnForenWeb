﻿import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stringformat' })
export class StringFormatPipe implements PipeTransform {
    transform(value: string, arg: string): string {

        if (!value || value == null) {
            return null;
        }

        if (arg == null) {
            return value;
        }

        let arrFormats: string[] = new Array<string>();
        arrFormats = arg.split(/(\x+)/g).filter(String);

        let formattedString: string = arg;
        let startLength: number = 0;

        arrFormats.forEach(function (pieceOfFormat) {
            if (pieceOfFormat.includes("x")) {
                formattedString = formattedString.replace(pieceOfFormat, value.toString().substring(startLength, startLength + pieceOfFormat.length))
                startLength += pieceOfFormat.length;
            }
        });

        return formattedString;
    }
}