const backgrounds = {
  "evelyn": {
    "img": "/images/evelyn.png",
    "scrollSpeed": 1,   
    "tint": "rgba(0,0,0,0.3)"
  },
  "image_test": {
    "img": "/images/image_example.jpg",
    "scrollSpeed": 10,
    "tint": "rgba(0,0,0,0.3)"
  },
  "charley": {
    "img": "/images/charley1.png",
    "scrollSpeed": 1,
    "tint": "rgba(0,0,0,0.3)"
  },
  "trees": {
    "img": "/images/trees.png",
    "scrollSpeed": 10,
    "tint": "rgba(0,0,0,0.3)"
  }
};

let currentBgKey = null;

function changeImage(x,image,y)
{

    if (x===1)
    {
        image.src = "/images/ui/spr_devlog_2.png"
    }
    if (x===2)
    {
        image.src = "/images/ui/spr_devlog_1.png"
    }
    if (x===3)
        {
        image.src = "/images/ui/spr_demo_2.png"
        }
    if (x===4)
        {
        image.src = "/images/ui/spr_demo_1.png"
        }
    if (x===5)
        {
        image.src = "/images/ui/spr_credits_2.png"
        }
    if (x===6)
        {
        image.src = "/images/ui/spr_credits_1.png"
        }
    if (x===7)
        {
        image.src = "/images/ui/spr_discord_2.png"
        }
    if (x===8)
        {
        image.src = "/images/ui/spr_discord_1.png"
        }
}
function setBackground(bgKey) {
  currentBgKey = bgKey; // Save the current background key
  const bg = backgrounds[bgKey];
  if (!bg) return;

  getTileWidth(bg.img, function(scaledWidth) {
    document.body.style.setProperty('--tile-bg', `url('${bg.img}')`);
    document.body.style.setProperty('--tile-tint', bg.tint);
    document.body.style.setProperty('--scroll-speed', `${bg.scrollSpeed}s`);
    document.body.style.setProperty('--scroll-amount', `-${scaledWidth}px`);
  });
}

// Recalculate on window resize
window.addEventListener('resize', function() {
  if (currentBgKey) setBackground(currentBgKey);
});

function getTileWidth(imgPath, callback) {
  const img = new Image();
  img.src = imgPath;
  img.style.position = 'absolute';
  img.style.visibility = 'hidden';
  img.style.height = '100vh'; // match your CSS scaling
  img.onload = function() {
    // Calculate scaled width based on natural aspect ratio
    const scaledWidth = img.naturalWidth * (window.innerHeight / img.naturalHeight);
    callback(scaledWidth);
    document.body.removeChild(img);
  };
  document.body.appendChild(img);
}

// Example usage: setBackground('evelyn');

document.addEventListener('DOMContentLoaded', function() {
  const type = document.body.getAttribute('data-page-type');

  switch (type) {
    case 'devlog':
      // Add "See other devlogs" at the bottom
      const footer = document.createElement('div');
      footer.style.textAlign = 'center';
      footer.style.marginTop = '40px';
      footer.innerHTML = `
        <hr>
        <p>Want to see more devlogs?</p>
        <a href="/devlogs/" style="font-size:1.2em;">Browse all devlogs</a>
      `;
      document.body.appendChild(footer);
      break;

    case 'main':
      // Add your top bar with clickable buttons
      const bar = document.createElement('div');
      bar.className = 'top-bar';
      bar.innerHTML = `
        <a href="/devlogs/"><img src="/images/ui/spr_devlog_1.png" width="160" onmouseover="changeImage(1,this)" onmouseout="changeImage(2,this)"></a>
        <a href="/demo/"><img src="/images/ui/spr_demo_1.png" width="160" onmouseover="changeImage(3,this)" onmouseout="changeImage(4,this)"></a>
        <a href="/about/"><img src="/images/ui/spr_credits_1.png" width="160" onmouseover="changeImage(5,this)" onmouseout="changeImage(6,this)"></a>
        <a href="https://discord.gg/df3t2DRjaY"><img src="/images/ui/spr_discord_1.png" width="160" onmouseover="changeImage(7,this)" onmouseout="changeImage(8,this)"></a>
      `;
      document.body.insertBefore(bar, document.body.firstChild);
      bar.classList.remove('visible'); // Start hidden

      // Show when mouse is near the top (e.g., within 70px)
      document.addEventListener('mousemove', function(e) {
        if (e.clientY <= 90) { // Match the new bar height
          bar.classList.add('visible');
        } else {
          bar.classList.remove('visible');
        }
      });
      break;

    default:
      // Optional: handle unknown or default page types
      // e.g., log, show a message, or do nothing
      break;
  }
});

const style = document.createElement('style');
style.textContent = `
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 32px; /* Increased vertical padding for taller bar */
    background-color: rgba(0,0,0,0.85);
    position: fixed;
    top: -90px; /* Hide bar above the viewport, matches new height */
    left: 0;
    width: 100vw;
    z-index: 1000;
    border-bottom: 2px solid #222;
    box-sizing: border-box;
    transition: top 0.5s cubic-bezier(.22,1,.36,1); /* Ease out, no bounce, slower finish */
  }
  .top-bar.visible {
    top: 0; /* Slide bar into view */
  }
  .top-bar a {
    flex: 1 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top-bar img {
    display: block;
    margin: 0 auto;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }
`;
document.head.appendChild(style);