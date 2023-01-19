const children = document.querySelector(".as-imagegrid--7up .row").childNodes;
const arr = [];
  for (let e of children) {
    e.firstElementChild
      ? arr.push(
          e.firstElementChild.getAttribute("data-analytics-link-component_name")
        )
      : null;
  }
console.log(arr)
