import { Component, OnInit } from '@angular/core';
import { APIService, ShopItem } from 'src/app/API.service';
import { ZenObservable } from 'zen-observable-ts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  public shopItemsList: Array<ShopItem> = [];

  private subscription: ZenObservable.Subscription | null = null;

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListShopItems().then((event) => {
      this.shopItemsList = event.items as ShopItem[];
      console.log(this.shopItemsList);
    });

    this.subscription = this.api.OnCreateShopItemListener().subscribe((event: any) => {
      const newShopItem = event.value.data?.onCreateShopItem;

      this.shopItemsList = [newShopItem, ...this.shopItemsList];
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = null;
  }
}
