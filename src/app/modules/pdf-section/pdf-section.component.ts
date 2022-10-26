import { Component, OnInit } from '@angular/core';
import { catchError, first, Observable } from 'rxjs';
import { DocumentService } from '@appservices/document.service';
import { IDocument } from '@appmodels/document.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pdf-section',
  templateUrl: './pdf-section.component.html',
  styleUrls: ['./pdf-section.component.scss'],
})
export class PdfSectionComponent implements OnInit {
  constructor(private documentService: DocumentService) {}

  selectedDocumentId: string = '';
  selectedFileName: string = '';
  documents$?: Observable<IDocument[]>;
  selectedDocument$?: Observable<IDocument>;

  onFileInput(inputEvent: Event) {
    this.selectedFileName = '';
    const fileInput = <HTMLInputElement>inputEvent.target;
    const file = fileInput?.files?.[0];

    if (file) {
      this.documentService
        .postDocument(file)
        .pipe(
          first(),
          catchError((error: HttpErrorResponse) => {
            if (error.status === 409) {
              this.selectedFileName = 'File already exists';
            }
            throw error;
          })
        )
        .subscribe((file) => {
          this.selectedFileName = file.filename;
          this.getDocumentList();
        });
    }
  }

  onSelectFile(id: string) {
    if (!this.selectedDocumentId || id !== this.selectedDocumentId) {
      this.selectedDocumentId = id;
      this.selectedDocument$ = this.documentService.getDocument(id);
    }
  }

  getDocumentList() {
    this.documents$ = this.documentService.getDocuments();
  }

  ngOnInit(): void {
    this.getDocumentList();
  }
}
