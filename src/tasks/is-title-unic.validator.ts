import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { TasksService } from "./tasks.service";


@Injectable()
@ValidatorConstraint()
export class IsTitleUnicConstraint implements ValidatorConstraintInterface{

    constructor(private tasksService: TasksService){}
    validate(title: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.tasksService.findOne(title)  //duas !! faz o que era implicito ser real e a outra inverte//
    }
}


export function IsTitleUnic(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsTitleUnicConstraint,
      });
    };
  }