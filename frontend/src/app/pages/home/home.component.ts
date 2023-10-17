import { Component } from '@angular/core';
import { Service } from '../../shared/services/service'
interface MachineInfo {
  name: string;
  partition: string;
  state: string;
  cpus: number;
  cpuLoad: number;
}

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  results: string | undefined;
  machines: any[] = [];

  constructor(private service: Service) {}
  ngOnInit() {
    this.refresh()
  }
  public parse(data: string) {
    let lines = data.split("\n").slice(1)
    lines.forEach(line => {
      let lineElements = line.slice(1, -1).split(" ")
      let machinePrefix = lineElements[0].slice(0, 4);
      if (machinePrefix === "xcnc" || machinePrefix === "xcnd") {
        
      } else {
        let cleanLineElements: any[] = []
        lineElements.forEach(element => {
          if (element !== "") {
            cleanLineElements.push(element)
          }
        })
        let machine = {
          name: cleanLineElements[0],
          partition: cleanLineElements[1],
          state: cleanLineElements[2],
          cpus: cleanLineElements[3],
          cpuLoad: cleanLineElements[4]
        }
        this.machines.push(machine)
      }

    })
    return data
  }

  public refresh() {
    this.service.get().subscribe((data: any) => {
      console.log(data)
      this.results = this.parse(data);

    });
  }

  public generate() {
    
  }
}

