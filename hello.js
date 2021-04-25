// document.getElementById => dom object

// document.getElementsByClassName => array of dom objects

// document.getElementsByTagName => array of dom objects

// document.querySelector => dom object

// document.querySelectorAll => array of dom objects
const option_btn = document.querySelectorAll(".option>button")
console.log(option_btn)

for (let i = 0; i < option_btn.length; i++) {
  option_btn[i].addEventListener("click", function (e) {
    console.log(e.target.classList)

    e.target.blur()
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active")
    } else {
      e.target.classList.add("active")
    }
  })
}

document.getElementById("submit").addEventListener("click", function () {
  const selected_opt_btn = document.querySelectorAll(".option>button.active")
  const selected_meal = []

  if (selected_opt_btn.length === 0) {
    alert("請選擇至少一個選項喲！")
    return
  }

  for (let i = 0; i < selected_opt_btn.length; i++) {
    selected_meal.push(selected_opt_btn[i].innerHTML)
  }

  console.log(selected_meal)
  const result_index = Math.floor(Math.random() * selected_meal.length) // returns a random integer from 0 to
  const final = selected_meal[result_index]
  console.log(final)

  const final_dom = document.getElementById("final")
  final_dom.classList.remove("d-none")
  final_dom.getElementsByTagName("h1")[0].innerHTML = final

  window.location.href = "#final"
})
