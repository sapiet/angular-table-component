import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { NgForOfContext } from '@angular/common';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent {
  @Input() items;
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<NgForOfContext<any>>;
}
