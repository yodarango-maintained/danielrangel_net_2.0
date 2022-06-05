<script>
export let techStack = []
</script>

<div class="icon-wrapper">
<h3>Tech Stack</h3>
{#each techStack as item}
<img src={item} alt="programing language icon" class="icon"/> 
{/each}
</div>
<style>
.icon-wrapper{
width: 100%;
margin: 2rem auto 1rem;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
}

h3 {
font-size: 3rem;
width: 100%;
text-align: center;
margin: 2rem auto;
}

.icon {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  object-position: center;
  margin: 0 1.5rem;

}


@media (max-width: 370px){
  .icon {
     margin: 0 1rem;
  }
}
</style>