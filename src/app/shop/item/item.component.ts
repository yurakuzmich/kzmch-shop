import { Component, Input } from '@angular/core';
import { Storage } from 'aws-amplify';
import { APIService, ShopItem } from 'src/app/API.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent {
  @Input() shopItem!: ShopItem;
  public imageUrl = '';

  ngOnInit(): void {
    this.getImageUrl();
  }

  async getImageUrl() {
    this.imageUrl = await Storage.get(this.shopItem.image!) || '';
  }
}
