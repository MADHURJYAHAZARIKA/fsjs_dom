let arr = document.querySelector("#SIvCob").children;

function remove(arr) {
  for (let i = 0; i <=arr.length; i++) {
    if(i%2==0)
    {
    arr[i].remove();
    }
  }
}
remove(arr)