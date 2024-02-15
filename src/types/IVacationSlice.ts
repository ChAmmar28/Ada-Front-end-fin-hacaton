import { IVacancyData } from "./IVacancyData";

export interface IVacationSlice {
  list: IVacancyData[];
  isLoading: boolean;
  error: any; // Тип ошибки может быть уточнен
}
