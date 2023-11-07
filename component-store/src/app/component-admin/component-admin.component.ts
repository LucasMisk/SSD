import { Component, OnInit } from '@angular/core';
import {PCComponentService} from "../pcComponent.service";
import {PCComponent} from "../pcComponent";


@Component({
  selector: 'app-component-admin',
  templateUrl: './component-admin.component.html',
  styleUrls: ['../app.component.css'],
})
export class ComponentAdminComponent implements OnInit {
  components: PCComponent[] = [];
  selectedComponent: PCComponent | null = null;

  constructor(private componentService: PCComponentService) {}

  ngOnInit(): void {
    this.loadComponents();
  }

  loadComponents() {
    this.componentService.getAllComponents().subscribe((components) => {
      this.components = components;
    });
  }

  selectComponent(component: PCComponent) {
    this.selectedComponent = component;
  }

  updateComponent(component: PCComponent) {
    this.componentService.updateComponent(component).subscribe(() => {
      this.loadComponents();
      this.selectedComponent = null;
    });
  }

  deleteComponent(componentId: number) {
    this.componentService.deleteComponent(componentId).subscribe(() => {
      this.loadComponents();
      this.selectedComponent = null;
    });
  }
}
