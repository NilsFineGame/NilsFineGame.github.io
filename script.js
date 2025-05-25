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
  }
};

let currentBgKey = null;

function changeImage(x,image,y)
{

    if (x===1)
    {
        image.src = "/images/prem2.png"
    }
    if (x===2)
    {
        image.src = "/images/prem1.png"
    }
    if (x===3)
        {
        image.src = "/images/dem1.png"
        }
    if (x===4)
        {
        image.src = "/images/dem2.png"
        }
    if (x===5)
        {
        image.src = "/images/cred2.png"
        }
    if (x===6)
        {
        image.src = "/images/cred1.png"
        }
    if (x===7)
        {
        image.src = "/images/disc2.png"
        }
    if (x===8)
        {
        image.src = "/images/disc1.png"
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