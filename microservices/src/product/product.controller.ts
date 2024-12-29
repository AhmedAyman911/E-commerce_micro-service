/* eslint-disable prettier/prettier */

import { Controller, Get, Query, Post, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(@Query('type') type?: string): Promise<Product[]> {
    if (type) {
      return this.productService.getProductsByType(type); // Fetch products filtered by type
    }
    return this.productService.getAllProducts(); // Fetch all products
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    return this.productService.getProductById(id); // Fetch product by ID
  }

  @Post()
  async createProduct(@Body() product: Product): Promise<Product> {
    return this.productService.create(product); // Add new product
  }
}
