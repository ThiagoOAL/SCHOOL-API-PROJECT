import { IsString } from "class-validator";
import { IsTitleUnic } from "../is-title-unic.validator";

export class CreateTaskDto{
    
    @IsString()
    @IsTitleUnic({message: 'Tarefa já cadastrada!'})
    title: string;
}
