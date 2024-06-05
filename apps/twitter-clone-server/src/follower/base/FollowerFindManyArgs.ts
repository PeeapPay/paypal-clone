/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FollowerWhereInput } from "./FollowerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FollowerOrderByInput } from "./FollowerOrderByInput";

@ArgsType()
class FollowerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FollowerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FollowerWhereInput, { nullable: true })
  @Type(() => FollowerWhereInput)
  where?: FollowerWhereInput;

  @ApiProperty({
    required: false,
    type: [FollowerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FollowerOrderByInput], { nullable: true })
  @Type(() => FollowerOrderByInput)
  orderBy?: Array<FollowerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FollowerFindManyArgs as FollowerFindManyArgs };