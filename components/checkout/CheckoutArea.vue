<template>
  <section class="checkout-area pb-85">
    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <form @submit.prevent="handleFormSubmit">
        <div class="row">
          <div class="col-lg-6">
            <div class="checkbox-form">
              <h3>{{ $t('billingDetails') }}</h3>
              <billing-details />
              <div class="order-notes">
                <div class="checkout-form-list">
                  <label>Order Notes</label>
                  <textarea id="checkout-mess" cols="30" rows="10"
                    placeholder="Notes about your order, e.g. special notes for delivery." />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <order-area />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import BillingDetails from "./BillingDetails.vue";
import DifferentAddress from "./DifferentAddress.vue";
import OrderArea from "./OrderArea.vue";

export default {
  components: { OrderArea, BillingDetails, DifferentAddress },
  methods: {
    handleFormSubmit() {
      console.log('submit form')
    }
  }
};
</script>
