<template>
    <footer class="footer bg-primary py-8">
        <div class="container mx-auto">
            <div class="grid grid-cols-4 text-white">
                <div></div>
                <div>
                    <h4 class="mb-5 text-title">ABOUT SAHEE</h4>
                    <div>
                        <p class="mb-4">Home</p>
                        <p class="mb-4">Get touch</p>
                        <p class="mb-4">FAQs</p>
                    </div>
                </div>
                <div>
                    <h4 class="mb-5 text-title">PRODUCT</h4>
                    <div>
                        <p class="mb-4">Clothing</p>
                        <p class="mb-4">How it works</p>
                        <p class="mb-4">Member Discounts</p>
                    </div>
                </div>
                <div>
                    <h4 class="mb-5 text-title">NOT QUITE READY FOR SAHEE ?</h4>
                    <div>
                        <p class="mb-4">
                            Join our online no-code community for free. No spam.
                            Ever.
                        </p>
                    </div>
                    <div class="flex">
                        <Form.TextField class="mr-2"></Form.TextField>
                        <button-vue title="Subscribe" space="px-8 py-4" :border="'white'"></button-vue>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import ButtonVue from '@/components/atoms/Button.vue'
import * as Form from '@/components/molecules/form/form-components'
</script>
