<template>
  <section class="checkout-area pb-85">
    <br />
    <br />
    <br />
    <br />
    <div class="container">
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" :value="config.public.web3FormsKey">
          <input type="hidden" name="eventTitel" :value="event.Titel">
        <div class="row">
          <div class="col-lg-6">
            <div class="checkbox-form">
              <h3>{{ $t('billingDetails') }}</h3>
              <div class="row">
                <div class="col-md-12">
                  <div class="country-select">
                    <label>Country <span class="required">*</span></label>
                    <country-select />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>First Name <span class="required">*</span></label>
                    <input type="text" placeholder="First Name" name="firstName" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>Last Name <span class="required">*</span></label>
                    <input type="text" placeholder="Last Name" name="lastName" required>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>Company Name</label>
                    <input type="text" placeholder="example LTD." name="companyName">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>Address <span class="required">*</span></label>
                    <input type="text" placeholder="Street address" name="address" required>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <input type="text" placeholder="Apartment, suite, unit etc. (optional)" name="address2">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>Town / City <span class="required">*</span></label>
                    <input type="text" placeholder="Town / City" name="city" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>State / County <span class="required">*</span></label>
                    <input type="text" placeholder="State / County" name="state" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>Postcode / Zip <span class="required">*</span></label>
                    <input type="text" placeholder="Postcode / Zip" name="zip" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>Email Address <span class="required">*</span></label>
                    <input type="email" placeholder="Your Email" name="email" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>Phone <span class="required">*</span></label>
                    <input type="text" placeholder="Phone number" name="phone" required>
                  </div>
                </div>
              </div>
              <div class="order-notes">
                <div class="checkout-form-list">
                  <label>Order Notes</label>
                  <textarea id="checkout-mess" cols="30" rows="10"
                    placeholder="Notes about your order, e.g. special notes for delivery." name="notes">
                  </textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
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
                  </tbody>
                  <tfoot>
                    <tr class="shipping">
                      <th>Shipping</th>
                      <td><span class="amount">$0</span></td>
                    </tr>
                    <tr class="order-total">
                      <th>Order Total</th>
                      <td><strong><span class="amount">${{ event.Price }}</span></strong>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              
              <div class="h-captcha" data-captcha="true"></div>

              <div class="payment-method faq__wrapper tp-accordion">
                <div class="order-button-payment mt-20">
                  <button type="submit" class="tp-btn">Place order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import CountrySelect from "./CountrySelect.vue";
import { StrapiLocale } from '@nuxtjs/strapi/dist/runtime/types';
import { Event } from "~/types/event";

const { id } = useRoute().params as { id: string }
const { findOne } = useStrapi()
const { locale } = useI18n()
const config = useRuntimeConfig()

const temp = await findOne<Event>('events', id, {
  locale: locale.value as StrapiLocale,
  populate: ['Picture', 'authors.Picture']
})

const event: Event = temp.data.attributes

</script>
