import { Observable   } from "rxjs";
import html2canvas      from "html2canvas";
import jsPDF            from "jspdf";
//
export class PdfEngine
{
    //
    constructor(public pageTitle: string, public c_canvas : any, public divCanvas_Pdf : any, public fileName: string)
    {
        //   
    }
    //
    public _GetPDF(): Observable<void> {
        //            
        return new Observable<void>((observer) => {
        //
        console.log(this.pageTitle + ": [GENERANDO PDF]" );
        //
        const areaToPrint   = this.c_canvas.nativeElement;
        const borderToPrint = this.divCanvas_Pdf.nativeElement;
        //
        html2canvas(areaToPrint).then((_canvas) => {
            //
            let w       : number  = borderToPrint.offsetWidth;
            let h       : number  = borderToPrint.offsetHeight;
            //
            let imgData : string  = _canvas.toDataURL('image/jpeg');
            //
            let pdfDoc  : jsPDF   = new jsPDF("landscape", "px", [w, h]);
            //
            pdfDoc.addImage(imgData, 0, 0, w, h);
            //
            pdfDoc.save(this.fileName);
            //
            observer.next();
            observer.complete();
        });
    //    
    })};
}