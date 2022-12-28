function togglehashtagIcon() {
  document.getElementById("hashtagIcon").src =
    "/images/hashtagIcon2.png";
  document.getElementById("settingIcon").src =
    "/images/settingIcon.png";
  document.getElementById("settingSpan").classList.remove("nowMenu");
  document.getElementById("hashtagSpan").classList.add("nowMenu");
}
function toggleSettingIcon() {
  document.getElementById("settingIcon").src =
    "/images/settingIcon2.png";
  document.getElementById("hashtagIcon").src =
    "/images/hashtagIcon.png";
  document.getElementById("hashtagSpan").classList.remove("nowMenu");
  document.getElementById("settingSpan").classList.add("nowMenu");
}
