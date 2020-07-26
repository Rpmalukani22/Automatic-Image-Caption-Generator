import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  public imgname="galaxy.jpg";
  public h3txt="Deep Learning Based";
  public h1txt="Automatic Image Caption Generator";
  constructor() { }

  ngOnInit(): void {
  }

}
