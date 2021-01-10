import { Component, Input } from '@angular/core';
import { EnhancedMultiSelectComponent } from './enhanced-multi-select.component';

@Component({
  selector: 'app-enhanced-multi-select-option',
  template: `
    <label *ngIf="visible()" style="display: block">
      <input
        type="checkbox"
        [ngModel]="selected()"
        (ngModelChange)="setSelected($event)"
      />
      <ng-content></ng-content>
    </label>
  `,
})
export class EnhancedMultiSelectOptionComponent {
  constructor(private readonly select: EnhancedMultiSelectComponent) {}

  visible() {
    return this.value.includes(this.select.filter);
  }

  selected() {
    return this.select.value.has(this.value);
  }

  setSelected(selected: boolean) {
    if (selected) {
      this.select.value.add(this.value);
    } else {
      this.select.value.delete(this.value);
    }
  }

  @Input()
  value!: string;
}
