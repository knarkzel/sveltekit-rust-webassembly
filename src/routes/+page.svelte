<script lang="ts">
  import { sum } from "$lib/pkg/sum"; 
  
  function sumLargeArray(array: Int32Array): number {
    return array.reduce((acc, x) => acc + x);
  }

  // Create new array and benchmark sum function
  let largeArray = new Int32Array(1e6).fill(1);

  console.time("Sum large array in JS");
  console.log(sumLargeArray(largeArray));
  console.timeEnd("Sum large array in JS");

  console.time("Sum large array in WASM");
  console.log(sum(largeArray));
  console.timeEnd("Sum large array in WASM");
</script>
