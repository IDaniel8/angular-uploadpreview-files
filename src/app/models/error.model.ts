import { HttpErrorResponse } from '@angular/common/http';

export interface Error extends Omit<HttpErrorResponse, 'error'> {
  error?: any;
}
