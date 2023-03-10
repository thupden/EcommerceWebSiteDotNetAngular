import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../models/pagination';
import { Product } from '../models/product';
import {Brand} from '../models/brand';
import { Type } from '../models/type';
import { ShopParams } from '../models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "https://localhost:5001/api/";
  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams)
  {
    let params = new HttpParams();

    if(shopParams.brandId > 0) params = params.append("brandId", shopParams.brandId);
    if(shopParams.typeId > 0) params = params.append("typeId", shopParams.typeId);
    params = params.append("sort",shopParams.sort);
    params = params.append("pageSize", shopParams.pageSize);
    params = params.append("pageIndex", shopParams.pageNumber);
    if(shopParams.search) params = params.append("search", shopParams.search);

    return this.http.get<Pagination<Product[]>>(this.baseUrl + "products", {params});
  }

  getProduct(id: number){
      return this.http.get<Product>(this.baseUrl + "products/" + id);
  }

  getBrands()
  {
    return this.http.get<Brand[]>(this.baseUrl + "products/brands");
  }

  getTypes()
  {
    return this.http.get<Type[]>(this.baseUrl + 'products/types');
  }
}
