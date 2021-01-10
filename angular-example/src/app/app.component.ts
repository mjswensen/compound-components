import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-enhanced-multi-select [(value)]="selection">
      <app-enhanced-multi-select-option value="apples">
        Apples
      </app-enhanced-multi-select-option>
      <app-enhanced-multi-select-option value="oranges">
        Oranges
      </app-enhanced-multi-select-option>
      <app-enhanced-multi-select-option value="peaches">
        Peaches
      </app-enhanced-multi-select-option>
      <app-enhanced-multi-select-option value="grapes">
        Grapes
      </app-enhanced-multi-select-option>
      <app-enhanced-multi-select-option value="plums">
        Plums
      </app-enhanced-multi-select-option>
    </app-enhanced-multi-select>
    <pre><code>{{ selectionArray() | json }}</code></pre>
  `,
})
export class AppComponent {
  selection = new Set<string>();

  selectionArray() {
    return [...this.selection];
  }
}
