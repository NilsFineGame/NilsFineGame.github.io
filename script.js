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
function setTileBackground(imageUrl) {
  document.body.style.setProperty('--tile-bg', `url('${imageUrl}')`);
}