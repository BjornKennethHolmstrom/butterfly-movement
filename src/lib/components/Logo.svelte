<!-- src/lib/components/Logo.svelte -->
<script lang="ts">
  export let width = 100;
  export let height = 100;
</script>

<svg
  {width}
  {height}
  viewBox="0 0 300 200"
  xmlns="http://www.w3.org/2000/svg"
  aria-label="The Butterfly Movement Logo"
>
  <!-- Outer glow/aura effect -->
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Left wing -->
  <path d="M 150,100 C 100,60 60,90 50,130 C 40,170 80,180 120,150 C 140,135 150,100 150,100"
        fill="#4A90E2" opacity="0.9"
        filter="url(#glow)">
    <animate attributeName="d" 
             dur="4s"
             repeatCount="indefinite"
             values="
               M 150,100 C 100,60 60,90 50,130 C 40,170 80,180 120,150 C 140,135 150,100 150,100;
               M 150,100 C 100,65 65,95 55,135 C 45,175 85,185 125,155 C 145,140 150,100 150,100;
               M 150,100 C 100,60 60,90 50,130 C 40,170 80,180 120,150 C 140,135 150,100 150,100"
             />
  </path>

  <!-- Right wing -->
  <path d="M 150,100 C 200,60 240,90 250,130 C 260,170 220,180 180,150 C 160,135 150,100 150,100"
        fill="#34D399" opacity="0.9"
        filter="url(#glow)">
    <animate attributeName="d" 
             dur="4s"
             repeatCount="indefinite"
             values="
               M 150,100 C 200,60 240,90 250,130 C 260,170 220,180 180,150 C 160,135 150,100 150,100;
               M 150,100 C 200,65 235,95 245,135 C 255,175 215,185 175,155 C 155,140 150,100 150,100;
               M 150,100 C 200,60 240,90 250,130 C 260,170 220,180 180,150 C 160,135 150,100 150,100"
             />
  </path>

  <!-- Body -->
  <path d="M 150,70 C 145,80 145,90 150,100 C 155,90 155,80 150,70"
        fill="#1F2937"
        filter="url(#glow)" />
  
  <!-- Antennae -->
  <path d="M 150,70 C 145,60 140,50 135,45" 
        stroke="#1F2937" 
        stroke-width="2" 
        fill="none"
        filter="url(#glow)" />
  <path d="M 150,70 C 155,60 160,50 165,45" 
        stroke="#1F2937" 
        stroke-width="2" 
        fill="none"
        filter="url(#glow)" />
</svg>
