import { IsEmail, IsString, registerDecorator, ValidationArguments, ValidationOptions,} from "class-validator";

export function NoDuplicateTld(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'noDuplicateTld',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'string' && !/(\.[a-z]{2,})\1$/i.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} has a repeated TLD (like .com.com)`;
        },
      },
    });
  };
}

export class SignUpDto {
    @IsString()
    name: string

    @IsEmail()
    @NoDuplicateTld({ message: 'Please enter a valid email address' })
    email: string

    @IsString()
    password: string
}

export class SignInDto {
    @IsEmail()
    email: string

    @IsString()
    password: string
}
