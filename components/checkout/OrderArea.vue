<template>
    <!-- {{ event }} -->
  <div class="your-order mb-30 ">
      <h3>Your order</h3>
      <div class="your-order-table table-responsive">
          <table>
              <thead>
                  <tr>
                      <th class="product-name">Product</th>
                      <th class="product-total">Total</th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="cart_item">
                      <td class="product-name">
                        {{ event.Titel }} <strong class="product-quantity"> × 1</strong>
                      </td>
                      <td class="product-total">
                          <span class="amount">${{ event.Price }}</span>
                      </td>
                  </tr>
                  <!-- <tr class="cart_item">
                      <td class="product-name">
                          Vestibulum dictum magna <strong class="product-quantity"> × 1</strong>
                      </td>
                      <td class="product-total">
                          <span class="amount">$50.00</span>
                      </td>
                  </tr> -->
              </tbody>
              <tfoot>
                  <!-- <tr class="cart-subtotal">
                      <th>Cart Subtotal</th>
                      <td><span class="amount">$215.00</span></td>
                  </tr> -->
                  <tr class="shipping">
                      <th>Shipping</th>
                      <td><span class="amount">$0</span></td>

                      <!-- <td>
                          <ul>
                              <li>
                                  <input id="flat_shipping" type="radio" name="shipping">
                                  <label for="flat_shipping">
                                      Flat Rate: <span class="amount">$7.00</span>
                                  </label>
                              </li>
                              <li>
                                  <input id="free_shipping" type="radio" name="shipping">
                                  <label for="free_shipping">Free Shipping:</label>
                              </li>
                          </ul>
                      </td> -->
                  </tr>
                  <tr class="order-total">
                      <th>Order Total</th>
                      <td><strong><span class="amount">${{ event.Price }}</span></strong>
                      </td>
                  </tr>
              </tfoot>
          </table>
      </div>

      <div class="payment-method faq__wrapper tp-accordion">
          <!-- <div class="accordion" id="checkoutAccordion">
          <div class="accordion-item">
              <h2 class="accordion-header" id="checkoutOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bankOne" aria-expanded="true" aria-controls="bankOne">
                  Direct Bank Transfer
                  <span class="accordion-btn"></span>
                  </button>
              </h2>
              <div id="bankOne" class="accordion-collapse collapse show" aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion">
                  <div class="accordion-body">
                  <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                  </div>
              </div>
          </div>
          <div class="accordion-item">
              <h2 class="accordion-header" id="paymentTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#payment" aria-expanded="false" aria-controls="payment">
                  Cheque Payment
                  <span class="accordion-btn"></span>
                  </button>
              </h2>
              <div id="payment" class="accordion-collapse collapse" aria-labelledby="paymentTwo" data-bs-parent="#checkoutAccordion">
                  <div class="accordion-body">
                  <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                  </div>
              </div>
          </div>
          </div> -->
          <div class="order-button-payment mt-20">
          <button type="submit" class="tp-btn">Place order</button>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { StrapiLocale } from '@nuxtjs/strapi/dist/runtime/types';
import { Event } from "~/types/event";

const { id }  = useRoute().params as { id: string }
const { findOne } = useStrapi()
const { locale } = useI18n()

const temp = await findOne<Event>('events', id, {
    locale: locale.value as StrapiLocale,
    populate: ['Picture', 'authors.Picture']
})

const event : Event  = temp.data.attributes

</script>
