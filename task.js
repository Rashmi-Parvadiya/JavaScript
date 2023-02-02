const calcform = (formCalc) => {
  let msg = document.querySelectorAll(".form_msg")
  msg.forEach((bill) => {
    bill.innerText = ""
  })
  msg = document.getElementById("form_msg_user")
  const username = document.calc_form.form_People.value
  if (username <= 0) {
    return 0
  }

  msg = document.getElementById("msgbill")
  const bill = parseFloat(document.calc_form.form_bill.value)
  if (isNaN(bill)) {
    return 0
  }

  msg = document.getElementById("form_msg_Tip")
  let input_txt = formCalc.name
  let v
  switch (input_txt) {
    case "tip":
      if (document.querySelector("input.btn_Tip_selected")) {
        document.querySelector("input.btn_Tip_selected").className = "btn_Tip"
      }
      if (formCalc.type === "button") {
        formCalc.className = "btn_Tip_selected"
        document.getElementById("form_custom").value = ""
      }
      v = parseInt(formCalc.value)
      if (isNaN(v)) {
        return 0
      } else if (v < 0 || v > 100) {
        return 0
      }
      break
    case "formbill":
    case "form_People":
      let collection = document.getElementsByClassName("btn_Tip_selected")
      console.log(collection)
      if (collection.length != 0) {
        v = parseInt(collection.item(0).value)
      } else if (document.getElementById("form_custom").value != "") {
        v = parseInt(document.getElementById("form_custom").value)
      } else {
        v = 0
      }
  } 
  v *= 0.01
  showValue(v, username)
} 

const showValue = (v, username) => {
  const check = parseFloat(calc_form.form_bill.value)
  if (isNaN(check)) {
  }
  let tip = (check * v) / username

  const regex = /^\d+(\.\d{0,2})?/
  let tipString = tip.toString().match(regex)[0]
  const total = check / username + tip

  $("#Amount_Result").text('$' + parseFloat(tipString).toFixed(2))
  $("#Total_Result").text('$' + total.toFixed(2))
  console.log(total);
}

const restore = () => {
  $(`#Amount_Result`).text("$0.00")
  $(`#Total_Result`).text("$0.00")
}