import { IsDateString, IsIn, IsOptional, IsString } from "class-validator";

export class FilterLogsDto {
  @IsOptional()
  @IsIn(["Email", "SMS"])
  type?: string;

  @IsOptional()
  @IsString()
  user?: string;

  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @IsOptional()
  @IsDateString()
  dateTo?: string;
}
