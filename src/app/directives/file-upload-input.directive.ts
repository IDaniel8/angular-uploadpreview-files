import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import * as XLSX from 'xlsx';

@Directive({
  selector: '[fileUploadInput]',
  exportAs: 'fileInput',
})
export class FileUploadInputDirective {
  private fileProcess = {
    EXCEL: this.processExcelFile.bind(this),
    PDF: this.processPdfFile.bind(this),
  };

  public fileName: string = '';

  constructor(private elRef: ElementRef) {}

  @Input('filetype') fileType: string = '';
  @Output('onParseJSONFile') onParseJSONFile = new EventEmitter<any>();

  @HostBinding('attr.type') inputType = 'file';
  @HostBinding('style.display') style = 'none';

  @HostListener('change', ['$event.target'])
  onFileInput(target: HTMLInputElement) {
    const file = target.files?.[0];

    if (file) {
      this.fileName = file.name;
      this.fileProcess[this.fileType as 'EXCEL' | 'PDF'](file, (data: any) => {
        this.onParseJSONFile.emit(data);
      });
    }
  }

  processExcelFile(file: File, callback: (data: any) => void) {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e) => {
      const bufferArray = e.target?.result;
      const workBook: XLSX.WorkBook = XLSX.read(bufferArray, {
        type: 'buffer',
      });
      const workBookSheet: XLSX.WorkSheet =
        workBook.Sheets[workBook.SheetNames[0]];
      callback(XLSX.utils.sheet_to_json(workBookSheet));
    };
  }

  processPdfFile(file: File, callback: (data: any) => void) {
    callback([]);
  }

  onOpenFileInput() {
    this.elRef.nativeElement.click();
  }
}
