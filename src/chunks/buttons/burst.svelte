<script>
import {onMount} from "svelte"
// -- bursts
import Burst_0 from "../../assets/svgs/burst_0.svelte";
import Burst_1 from "../../assets/svgs/burst_1.svelte";
import Burst_2 from "../../assets/svgs/burst_2.svelte";
import Burst_3 from "../../assets/svgs/burst_3.svelte";
import Burst_4 from "../../assets/svgs/burst_4.svelte";


// state
let burst = 0;

// props
export let paintColor = "#f2f2f2"
export let styles = 'transform: translate(50%, 50%);'

// handle the click of the bubble to render the svgs and sound to similate burst
onMount(async ()=>{
const framesTimer = setInterval(()=>{
  burst += 1;
  burst > 5 ? (clearInterval(framesTimer)): null;
}, 30)
})

</script>

{#if burst === 1}
<div class={`burst`} style={`${styles}`}>
<Burst_0 svgColor={paintColor} />
</div>
{:else if burst === 2}
<div class={`burst`} style={`${styles}`}>
<Burst_1 svgColor={paintColor} />
</div>
{:else if burst === 3}
<div class={`burst`} style={`${styles}`}>
<Burst_2 svgColor={paintColor} />
</div>
{:else if burst === 4}
<div class={`burst`} style={`${styles}`}>
<Burst_3 svgColor={paintColor} />
</div>
{:else if burst >= 5}
<div class={`burst`} style={`${styles}`}>
<Burst_4 svgColor={paintColor} />
</div>
{/if}

<style>
.burst{
  position: fixed;
}
</style>