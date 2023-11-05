import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, ShopItem } from 'src/app/API.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.less']
})
export class AddItemComponent {
  public createForm: FormGroup;

  constructor(private fb: FormBuilder, private api: APIService) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public onCreate(shopItem: ShopItem) {
    this.api.CreateShopItem(shopItem)
      .then(() => {
        console.log('Item created');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('Error creating Item: ', e);
      });
  }
}
