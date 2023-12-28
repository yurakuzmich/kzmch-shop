import { Component, OnDestroy, OnInit } from '@angular/core';
import { APIService, ShopItem } from 'src/app/API.service';
import { ZenObservable } from 'zen-observable-ts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit, OnDestroy {
  public shopItemsList: Array<ShopItem> = [];

  private createItemSubscription: ZenObservable.Subscription | null = null;
  private deleteItemSubscription: ZenObservable.Subscription | null = null;
  private updateItemSubscription: ZenObservable.Subscription | null = null;
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

    this.updateItemSubscription = this.api.OnUpdateShopItemListener().subscribe((event: any) => {
      const updatedShopItem = event.value.data?.onUpdateShopItem;
      this.shopItemsList = this.shopItemsList.map((item) => item.id === updatedShopItem.id ? updatedShopItem : item);
    });

    this.subscriptions = [this.createItemSubscription, this.deleteItemSubscription, this.updateItemSubscription];
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
