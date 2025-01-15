<!-- src/lib/components/ButterflyAnimation.svelte -->
<script lang="ts">
  export let width = "100%";
  export let height = "100%";
</script>

<div class="butterfly-container" style="width: {width}; height: {height};">
  <svg
    viewBox="0 0 300 200"
    xmlns="http://www.w3.org/2000/svg"
    class="butterfly"
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
      
      <!-- Add gradients for wings -->
      <linearGradient id="leftWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4A90E2;stop-opacity:0.9"/>
        <stop offset="100%" style="stop-color:#4A90E2;stop-opacity:0.7"/>
      </linearGradient>
      
      <linearGradient id="rightWingGradient" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#34D399;stop-opacity:0.9"/>
        <stop offset="100%" style="stop-color:#34D399;stop-opacity:0.7"/>
      </linearGradient>
    </defs>
    
    <!-- Left wing -->
    <path
      d="M 150,100 C 100,60 60,90 50,130 C 40,170 80,180 120,150 C 140,135 150,100 150,100"
      fill="url(#leftWingGradient)"
      filter="url(#glow)"
      class="wing left-wing"
    />

    <!-- Right wing -->
    <path
      d="M 150,100 C 200,60 240,90 250,130 C 260,170 220,180 180,150 C 160,135 150,100 150,100"
      fill="url(#rightWingGradient)"
      filter="url(#glow)"
      class="wing right-wing"
    />

    <!-- Body -->
    <path
      d="M 150,70 C 145,80 145,90 150,100 C 155,90 155,80 150,70"
      fill="#1F2937"
      filter="url(#glow)"
    />
    
    <!-- Antennae -->
    <path
      d="M 150,70 C 145,60 140,50 135,45"
      stroke="#1F2937"
      stroke-width="2"
      fill="none"
      filter="url(#glow)"
      class="antenna"
    />
    <path
      d="M 150,70 C 155,60 160,50 165,45"
      stroke="#1F2937"
      stroke-width="2"
      fill="none"
      filter="url(#glow)"
      class="antenna"
    />
  </svg>
</div>

<style>
  .butterfly-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .butterfly {
    width: 100%;
    height: 100%;
  }

  .wing {
    transform-origin: 150px 100px;
    animation: wingBeat 4s ease-in-out infinite;
  }

  .left-wing {
    animation-delay: 0s;
  }

  .right-wing {
    animation-delay: 0s;
  }

  .antenna {
    transform-origin: 150px 70px;
    animation: antennaWave 6s ease-in-out infinite;
  }

  @keyframes wingBeat {
    0%, 100% {
      transform: rotate(0deg) scaleX(1);
    }
    25% {
      transform: rotate(-15deg) scaleX(0.9);
    }
    75% {
      transform: rotate(15deg) scaleX(0.9);
    }
  }

  @keyframes antennaWave {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(5deg);
    }
  }
</style>
