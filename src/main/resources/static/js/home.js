function togglehashtagIcon() {
  document.getElementById("hashtagIcon").src =
    "../static/image/hashtagIcon2.png";
  document.getElementById("settingIcon").src =
    "../static/image/settingIcon.png";
  document.getElementById("settingSpan").classList.remove("nowMenu");
  document.getElementById("hashtagSpan").classList.add("nowMenu");
}
function toggleSettingIcon() {
  document.getElementById("settingIcon").src =
    "../static/image/settingIcon2.png";
  document.getElementById("hashtagIcon").src =
    "../static/image/hashtagIcon.png";
  document.getElementById("hashtagSpan").classList.remove("nowMenu");
  document.getElementById("settingSpan").classList.add("nowMenu");
}
