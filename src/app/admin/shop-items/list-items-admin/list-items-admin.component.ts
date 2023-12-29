import { Component, OnDestroy, OnInit } from '@angular/core';
import { APIService, ShopItem } from 'src/app/API.service';
import { ZenObservable } from 'zen-observable-ts';

@Component({
  selector: 'app-list-items-admin',
  templateUrl: './list-items-admin.component.html',
  styleUrls: ['./list-items-admin.component.less']
})
export class ListItemsAdminComponent implements OnInit, OnDestroy {
  public shopItemsList: Array<ShopItem> = [];

  private createItemSubscription: ZenObservable.Subscription | null = null;
  private deleteItemSubscription: ZenObservable.Subscription | null = null;
  private subscriptions: ZenObservable.Subscription[] = [];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListShopItems().then((event) => {
      this.shopItemsList = event.items as ShopItem[];
      console.log(this.shopItemsList);
    });

    this.createItemSubscription = this.api.OnCreateShopItemListener().subscribe((event: any) => {
      const newShopItem = event.value.data?.onCreateShopItem;
      this.shopItemsList = [newShopItem, ...this.shopItemsList];
    });

    this.deleteItemSubscription = this.api.OnDeleteShopItemListener().subscribe((event: any) => {
      const deletedShopItem = event.value.data?.onDeleteShopItem;
      this.shopItemsList = this.shopItemsList.filter((item) => item.id !== deletedShopItem.id);
    });

    this.subscriptions = [this.createItemSubscription, this.deleteItemSubscription];
  }

  deleteItem(id: string) {
    this.api.DeleteShopItem({id});
    console.log(this.shopItemsList);
    alert('Item deleted');
    return false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
