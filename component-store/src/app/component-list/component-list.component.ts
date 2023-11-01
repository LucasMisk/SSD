import {Component, OnInit} from '@angular/core';
import {PCComponent} from "../pcComponent";
import {PCComponentService} from "../pcComponent.service";

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {
  title = 'PC Component Store';
  components: PCComponent[] = [];

  constructor(private componentService: PCComponentService) {}

  ngOnInit() {
    this.loadAllComponents();
  }

  loadAllComponents() {
    this.componentService.getAllComponents().subscribe(
      (components) => {
        this.components = components;
      },
      (error) => {
        console.error('Error loading components:', error);
      }
    );
  }
}





