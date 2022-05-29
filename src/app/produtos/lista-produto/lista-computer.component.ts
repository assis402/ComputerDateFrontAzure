import { Component, OnInit } from '@angular/core';
import { Computer } from '../computer';
import { ComputerService } from '../computer.service';

@Component({
  selector: 'app-lista-computer',
  templateUrl: './lista-computer.component.html' 
})
export class ListaComputerComponent implements OnInit {

  constructor(private computerService: ComputerService) {}

  public computers!: Computer[];

  ngOnInit(): void {
      this.computerService.getComputers()
        .subscribe({
          next: (computer) => {
            this.computers = computer;
            console.log(computer);
          },
          error: (error) => console.log(error)
        });
  }
}
