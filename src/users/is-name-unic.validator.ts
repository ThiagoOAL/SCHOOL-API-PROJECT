import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsersService } from "./users.service";

@Injectable()
@ValidatorConstraint()
export class IsNameUnicConstraint implements ValidatorConstraintInterface{

    constructor(private usersService: UsersService) {}

    validate(username: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.usersService.findOne(username);
    }
}


export function IsNameUnic(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void{
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsNameUnicConstraint,
      });
    };
  }