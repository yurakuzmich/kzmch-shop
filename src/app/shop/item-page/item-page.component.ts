import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { APIService, ShopItem } from 'src/app/API.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.less']
})
export class ItemPageComponent implements OnInit {

  shopItem$!: Observable<ShopItem>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: APIService
  ) {}

  ngOnInit() {
    this.shopItem$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.apiService.GetShopItem(params.get('id')!))
    );
  }

}
