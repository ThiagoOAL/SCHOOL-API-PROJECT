import { IsEmail } from 'class-validator'
import { IsNameUnic } from '../is-name-unic.validator';

export class CreateUserDto {
    @IsEmail({},{message:'Por gentileza, digite um e-mail válido'})
    email: string;

    @IsNameUnic({message:'UserName já cadastrado, por favor, escolha outro'})
    username: string;
}
