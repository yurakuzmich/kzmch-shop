import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from 'aws-amplify';
import { Subscription } from 'rxjs';
import { APIService, ShopItem } from 'src/app/API.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.less']
})
export class AddItemComponent implements OnInit, OnDestroy {
  public createForm: FormGroup;
  public isImageLoading = false;
  public isImageLoaded = false;
  public loadedImageLink = '';
  private imageKey = '';
  private formValueSubscription: Subscription | null = null;
  public currentValue: Partial<ShopItem>;

  constructor(private fb: FormBuilder, private api: APIService, private router: Router) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['0'],
      active: ['true', Validators.required],
    });

    this.currentValue = {name: '', description: ''};
  }

  ngOnInit(): void {
    this.formValueSubscription = this.createForm.valueChanges.subscribe((formValue) => {
      this.currentValue = formValue;
    });
  }

  public get isSubmitDisabled() { return this.createForm.invalid || this.isImageLoading; }

  async onImageSelected(event: any) {

    const file = event.target.files[0];
    if (file.size > 2097152) {
      alert('The file is toooo big. Put it in your ass and choose a file less than 2MB!');
      return;
    }

    try {
      this.isImageLoading = true;
      const uniqueName = this.generateUniqueFileName(file.name);
      const loadedFile = await Storage.put(uniqueName, file, {
        contentType: 'img/png',
      });
      this.imageKey = loadedFile.key;
      const url = await Storage.get(loadedFile.key);
      this.loadedImageLink = url;
      this.isImageLoading = false;
      this.isImageLoaded = true;
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  public onCreate(formValue: ShopItem) {

    const shopItem: ShopItem = {
      ...formValue,
      image: this.imageKey,
      special_offer: false,
    };

    console.log(shopItem);

    this.api.CreateShopItem(shopItem)
      .then(() => {
        console.log('Item created');
        this.createForm.reset();
        this.router.navigate(['/admin']);
      })
      .catch((e) => {
        console.log('Error creating Item: ', e);
      });
  }

  public generateUniqueFileName(name: string) {
    const [originalName, extension] = name.split('.');
    return `${originalName}-${new Date().getTime()}.${extension}`;
  }

  ngOnDestroy(): void {
    if(this.formValueSubscription) {
      this.formValueSubscription.unsubscribe()
    };
  }
}
