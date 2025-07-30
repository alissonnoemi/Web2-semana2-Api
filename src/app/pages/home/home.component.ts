import { Component } from '@angular/core';
import { TarjetaComponent } from "../../components/componentsHome/tarjeta/tarjeta.component";
import { HeroComponent } from "../../components/componentsHome/hero/hero.component";
import { CarouselComponent } from "../../components/componentsHome/carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TarjetaComponent, HeroComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
