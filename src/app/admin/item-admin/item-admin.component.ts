import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Storage } from 'aws-amplify';
import { ShopItem } from 'src/app/API.service';

@Component({
  selector: 'app-item-admin',
  templateUrl: './item-admin.component.html',
  styleUrls: ['./item-admin.component.less']
})
export class ItemAdminComponent {
  @Input() shopItem!: ShopItem;
  @Input() index!: number;

  @Output() deleteItem = new EventEmitter<string>();

  public imageUrl = '';

  ngOnInit(): void {
    this.getImageUrl();
  }

  async getImageUrl() {
    this.imageUrl = await Storage.get(this.shopItem.image!) || '';
  }

  delete() {
    this.deleteItem.emit(this.shopItem.id);
    // window.location.reload();
    return false; // Prevents the default action of the link. This is important for the anchor tag.

  }
}
