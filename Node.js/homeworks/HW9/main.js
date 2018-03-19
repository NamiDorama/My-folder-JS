const pic = document.getElementById('cuteImg');

if(pic) {
  pic.onload = () => console.log(
    `Width: ${pic.width}px
Height: ${pic.height}px`
  );
} else {
  console.log("Picture doesn't exist");
}
