import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enhanced-multi-select',
  template: `
    <input type="text" [(ngModel)]="filter" />
    <ng-content></ng-content>
  `,
})
export class EnhancedMultiSelectComponent {
  @Input()
  value!: Set<string>;

  @Output()
  valueChange = new EventEmitter<Set<string>>();

  filter = '';
}
