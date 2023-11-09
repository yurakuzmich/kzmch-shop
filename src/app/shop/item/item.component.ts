import { Component, Input } from '@angular/core';
import { APIService, ShopItem } from 'src/app/API.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent {
  @Input() shopItem!: ShopItem;
}
