<template>
<div class="custom-control custom-checkbox">

    <input
        class="custom-control-input"
        type="checkbox"
 />
<!-- 
        [id]="inputId"
        [name]="name"
        [value]="value"
        [tabindex]="tabindex"
        [disabled]="disabled"
        [indeterminate]="indeterminate"
        [checked]="checked"
        [required]="required"
        [attr.aria-checked]="checked"
        [attr.aria-labelledby]="ariaLabelledBy"
        [attr.aria-label]="ariaLabel"
        (change)="_onCheckboxChange($event)"
        (click)="_onCheckboxClick($event)"
        (focus)="onFocus($event)"
        (blur)="onBlur($event)" -->
    <label class="custom-control-label"
        [attr.for]="inputId">
        <ng-content>Hey mane</ng-content>
    </label>

    <div class="invalid-feedback">
        Broasssssss
            <!-- <ng-content></ng-content> -->
    </div>

</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>


<style lang="scss">
body{
    background: red($color: #000000)
}
</style>
