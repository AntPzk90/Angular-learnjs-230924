import { ChangeDetectionStrategy, Component } from '@angular/core'
import { productsMock } from '../../shared/products/products.mock'

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly products = productsMock
}
