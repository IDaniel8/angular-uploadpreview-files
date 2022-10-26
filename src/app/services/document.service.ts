import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '@config/app.config';
import { IDocument } from '@appmodels/document.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(
    @Inject(APP_CONFIG) private config: IAppConfig,
    private http: HttpClient
  ) {}

  getDocuments(): Observable<IDocument[]> {
    return this.http.get<IDocument[]>(`${this.config?.API_MOCK_URL}/documents`);
  }

  getDocument(pdfID: string): Observable<IDocument> {
    return this.http.get<IDocument>(
      `${this.config?.API_MOCK_URL}/documents/file/${pdfID}`
    );
  }

  postDocument(file: File): Observable<IDocument> {
    const formData = new FormData();
    formData.append('pdf', file);
    return this.http.post<IDocument>(
      `${this.config?.API_MOCK_URL}/documents/file`,
      formData
    );
  }
}
