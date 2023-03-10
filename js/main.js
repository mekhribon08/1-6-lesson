var elBtn = document.querySelector("[data-button]");
var elDiv = document.querySelector("[data-wrapper]");
var elList = document.querySelector("[data-ul]");

elBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  var elBtnSave = document.createElement("button");
  var elBtnDelate = document.createElement("button");
  var elInput = document.createElement("input");

  elInput.classList.add("el-input");
  elBtnSave.classList.add("el-btnsave");
  elBtnDelate.classList.add("el-btndelate");

  elBtnSave.textContent = "Save";
  elBtnDelate.textContent = "Cancel";

  elDiv.appendChild(elInput);

  elBtn.remove();

  elDiv.appendChild(elBtnSave);
  elDiv.append(elBtnDelate);

  elBtnDelate.addEventListener("click", (evt) => {
    elInput.remove();
    elBtnDelate.remove();
    elBtnSave.remove();

    elDiv.append(elBtn);
  });

  elBtnSave.addEventListener("click", function (evt) {
    evt.preventDefault();

    var elLi = document.createElement("li");
    elLi.textContent = elInput.value;
    elLi.classList.add("el-li");

    elList.append(elLi);

    var elBtnRemove = document.createElement("button");
    elBtnRemove.classList.add("btn-remove");
    elLi.appendChild(elBtnRemove);
    elBtnRemove.textContent = ":";

    elBtnRemove.addEventListener("click", (evt) => {
      elLi.remove();
    });
  });
});

document.addEventListener("click", (evt) => {
  orModalBtnClick(evt);
  onModalOutsideClick(evt);
  onModalCloseClick(evt);
});

function orModalBtnClick(evt) {
  const el = evt.target.closest("[data-modal-open]");

  if (!el) return;

  const modalSel = el.dataset.modalOpen;

  document.querySelector(modalSel).classList.add("show");
}

function onModalOutsideClick(evt) {
  const el = evt.target;

  if (!el.matches("[data-modal]")) return;

  el.classList.remove("show");
}

function onModalCloseClick(evt) {
  const el = evt.target.closest("[data-modal-close]");

  if (!el) return;

  el.parentElement.parentElement.classList.remove("show");
}
