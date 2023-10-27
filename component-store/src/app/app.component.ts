import { Component, OnInit } from '@angular/core';
import { PCComponent } from './pcComponent'; // Adjust the import path as needed
import { PCComponentService } from './pcComponent.service'; // Adjust the import path as needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
