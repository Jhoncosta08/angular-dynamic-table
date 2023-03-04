import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appTableSort]'
})
export class TableSortDirective {
  @Input() appTableSort: Array<any> = [];
  private sortOrder: number = 1;
  private collator: Intl.Collator = Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

  constructor(private targetEl: ElementRef) { }

  @HostListener('click')
  tableSortData(): void {
    const el = this.targetEl.nativeElement;
    let order = el.getAttribute('data-order');
    const property = el.getAttribute('data-name');
    order = order === 'desc' ? 'asc' : 'desc';
    el.setAttribute('data-order', order);
    this.appTableSort.sort(this.startSort(property, order));
  }

  startSort(property: any, order: any): (a: any, b: any) => number {
    this.sortOrder = order === 'desc' ? -1 : 1;
    return (a: any, b: any) => this.collator.compare(a[property], b[property]) * this.sortOrder;
  }

}
