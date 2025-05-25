const backgrounds = {
  "evelyn": {
    "img": "/images/evelyn.png",
    "scrollAmount": 490, 
    "scrollSpeed": 1,   
    "tint": "rgba(0,0,0,0.3)"
  },
  "image_test": {
    "img": "/images/image_example.jpg",
    "scrollAmount": 520,
    "scrollSpeed": 10,
    "tint": "rgba(0,0,0,0.5)"
  }
};


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
  const bg = backgrounds[bgKey];
  if (!bg) return;
  document.body.style.setProperty('--tile-bg', `url('${bg.img}')`);
  document.body.style.setProperty('--tile-tint', bg.tint);
  document.body.style.setProperty('--scroll-speed', `${bg.scrollSpeed}s`);
  document.body.style.setProperty('--scroll-amount', `-${bg.scrollAmount}px`);
}

// Example usage: setBackground('evelyn');